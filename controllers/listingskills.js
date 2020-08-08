const { db } = require('../config/db');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

/**
 * @desc    Get all listing skills
 * @route   GET /api/listing-skills
 * @desc    Get all listing skills for a listing
 * @route   GET /api/listings/:listing_id/listing-skills
 * @access  Public
 */
exports.getListingSkills = asyncHandler(async (req, res, next) => {
  if (req.params.listing_id) {
    // return 404 error response if listing not found
    const skills = await db.many(
      'SELECT ls.listing_id, ls.listing_skill_id, ls.skill_id, s.skill FROM ListingSkills ls LEFT JOIN Skills s ON ls.skill_id = s.skill_id WHERE ls.listing_id = $1',
      req.params.listing_id
    );

    // remove null skill_id from result
    const data = skills.filter(m => m.milestone_id !== null);

    return res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  }

  res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get single listingskill by listing skill id
 * @route   GET /api/listing-skills/:id
 * @access  Public
 */
exports.getListingSkill = asyncHandler(async (req, res) => {
  const rows = await db.one(
    'SELECT * FROM ListingSkills JOIN Skills USING (skill_id) WHERE listing_skill_id = $1',
    req.params.id
  );
  res.status(200).json({
    success: true,
    data: rows,
  });
});

/**
 * @desc    Create listing skill for listing
 * @route   POST /api/listing-skills
 * @access  Admin/Owner
 */
exports.createListingSkill = asyncHandler(async (req, res, next) => {
  const { listing_id, skill_id } = req.body;

  const data = {
    listing_id,
    skill_id,
  };

  // check listing owner for non-admin users
  if (
    req.user.role !== 'admin' &&
    !(await isListingOwner(req.user.user_id, listing_id))
  ) {
    return next(
      new ErrorResponse(
        `Not authorised to create listing skills for this listing`,
        403
      )
    );
  }

  const rows = await db.one(
    'INSERT INTO ListingSkills (${this:name}) VALUES (${this:csv}) RETURNING *',
    data
  );

  res.status(201).json({
    success: true,
    data: rows,
  });
});

/**
 * @desc    Delete single listing skill by listing skill id
 * @route   DELETE /api/listing-skills/:id
 * @access  Admin/Owner
 */
exports.deleteListingSkill = asyncHandler(async (req, res, next) => {
  // check if listingskill exists
  const listingSkill = await db.one(
    'SELECT * FROM ListingSkills WHERE listing_skill_id = $1',
    req.params.id
  );

  // check listing owner for non-admin users
  if (
    req.user.role !== 'admin' &&
    !(await isListingOwner(req.user.user_id, listingSkill.listing_id))
  ) {
    return next(
      new ErrorResponse(
        `Not authorised to create listing skills for this listing`,
        403
      )
    );
  }

  const rows = await db.one(
    'DELETE FROM ListingSkills WHERE listing_skill_id = $1 RETURNING *',
    req.params.id
  );

  res.status(200).json({
    success: true,
    data: rows,
  });
});

const isListingOwner = async (userId, listingId) => {
  const owner = await db.one(
    'SELECT created_by FROM Listings WHERE listing_id = $1',
    listingId
  );
  return parseInt(userId) === owner.created_by;
};

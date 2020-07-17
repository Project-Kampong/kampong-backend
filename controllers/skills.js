const { db, parseSqlUpdateStmt } = require('../config/db');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

/**
 * @desc    Get all skills
 * @route   GET /api/skills
 * @desc    Get all skills for a listing
 * @route   GET /api/listings/:listing_id/skills
 * @desc    Get all skills for a profile
 * @route   GET /api/profiles/:profile_id/skills
 * @access  Public
 */
exports.getSkills = asyncHandler(async (req, res) => {
  if (req.params.listing_id) {
    const skills = await db.manyOrNone(
      'SELECT * FROM ListingSkills ls JOIN Skills s USING (skill_id) WHERE ls.listing_id = $1',
      req.params.listing_id
    );
    return res.status(200).json({
      success: true,
      count: skills.length,
      data: skills
    });
  }

  if (req.params.profile_id) {
    const skills = await db.manyOrNone(
      'SELECT * FROM ProfileSkills ps JOIN Skills s USING (skill_id) WHERE ps.user_id = $1',
      req.params.profile_id
    );
    return res.status(200).json({
      success: true,
      count: skills.length,
      data: skills
    });
  }

  res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get single skill
 * @route   GET /api/skills/:id
 * @access  Public
 */
exports.getSkill = asyncHandler(async (req, res) => {
  const rows = await db.one(
    'SELECT * FROM skills WHERE skill_id = $1',
    req.params.id
  );
  res.status(200).json({
    success: true,
    data: rows
  });
});

/**
 * @desc    Create skill
 * @route   POST /api/skills
 * @access  Admin
 */
exports.createSkill = asyncHandler(async (req, res) => {
  const { skill } = req.body;

  const data = {
    skill
  };

  const rows = await db.one(
    'INSERT INTO skills (${this:name}) VALUES (${this:csv}) RETURNING *',
    data
  );

  res.status(201).json({
    success: true,
    data: rows
  });
});

/**
 * @desc    Update single skill
 * @route   PUT /api/skills/:id
 * @access  Admin
 */
exports.updateSkill = asyncHandler(async (req, res, next) => {
  // check if skill exists
  const skillExists = await db.oneOrNone(
    'SELECT * FROM skills WHERE skill_id = $1',
    req.params.id
  );

  // return bad request response if invalid skill
  if (!skillExists) {
    return next(new ErrorResponse(`Skill does not exist`, 400));
  }

  const { skill } = req.body;

  const data = {
    skill
  };

  const updateSkillQuery = parseSqlUpdateStmt(
    data,
    'skills',
    'WHERE skill_id = $1 RETURNING *',
    [req.params.id]
  );

  const rows = await db.one(updateSkillQuery);

  res.status(200).json({
    success: true,
    data: rows
  });
});

/**
 * @desc    Delete single skill
 * @route   DELETE /api/skills/:id
 * @access  Admin
 */
exports.deleteSkill = asyncHandler(async (req, res, next) => {
  // check if skill exists
  const skill = await db.oneOrNone(
    'SELECT * FROM skills WHERE skill_id = $1',
    req.params.id
  );

  // return bad request response if invalid skill
  if (!skill) {
    return next(new ErrorResponse(`Skill does not exist`, 400));
  }

  const rows = await db.one(
    'DELETE FROM skills WHERE skill_id = $1 RETURNING *',
    req.params.id
  );

  res.status(200).json({
    success: true,
    data: rows
  });
});

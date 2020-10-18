import { db } from '../database/db';
import { asyncHandler } from '../middleware';
import { ErrorResponse, parseSqlUpdateStmt } from '../utils';
import { cleanseData } from '../utils/dbHelper';

/**
 * @desc    Get all skills
 * @route   GET /api/skills
 * @access  Public
 */
export const getSkills = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get single skill
 * @route   GET /api/skills/:id
 * @access  Public
 */
export const getSkill = asyncHandler(async (req, res) => {
    const rows = await db.one('SELECT * FROM skills WHERE skill_id = $1', req.params.id);
    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Create skill
 * @route   POST /api/skills
 * @access  Admin
 */
export const createSkill = asyncHandler(async (req, res) => {
    const { skill, skill_group, skill_description } = req.body;

    const data = {
        skill,
        skill_group,
        skill_description,
    };

    const rows = await db.one('INSERT INTO skills (${this:name}) VALUES (${this:csv}) RETURNING *', data);

    res.status(201).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Update single skill
 * @route   PUT /api/skills/:id
 * @access  Admin
 */
export const updateSkill = asyncHandler(async (req, res, next) => {
    // check if skill exists, 404 if does not exist
    await db.one('SELECT * FROM skills WHERE skill_id = $1', req.params.id);

    const { skill, skill_group, skill_description } = req.body;

    const data = {
        skill,
        skill_group,
        skill_description,
    };

    cleanseData(data);

    const updateSkillQuery = parseSqlUpdateStmt(data, 'skills', 'WHERE skill_id = $1 RETURNING *', [req.params.id]);

    const rows = await db.one(updateSkillQuery);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Delete single skill
 * @route   DELETE /api/skills/:id
 * @access  Admin
 */
export const deleteSkill = asyncHandler(async (req, res, next) => {
    // check if skill exists
    const skill = await db.oneOrNone('SELECT * FROM skills WHERE skill_id = $1', req.params.id);

    // return bad request response if invalid skill
    if (!skill) {
        return next(new ErrorResponse(`Skill does not exist`, 400));
    }

    const rows = await db.one('DELETE FROM skills WHERE skill_id = $1 RETURNING *', req.params.id);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

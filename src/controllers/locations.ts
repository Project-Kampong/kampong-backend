import { db } from '../database/db';
import { asyncHandler } from '../middleware';
import { cleanseData, ErrorResponse } from '../utils';

/**
 * @desc    Get all locations
 * @route   GET /api/locations
 * @access  Public
 */
export const getLocations = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get single location by location id
 * @route   GET /api/listing-locations/:id
 * @access  Public
 */
export const getLocation = asyncHandler(async (req, res) => {
    const rows = await db.one('SELECT * FROM Locations lo WHERE location_id = $1', req.params.id);
    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Create location for listing (with location_id known)
 * @route   POST /api/listing-locations
 * @access  Admin
 */
export const createLocation = asyncHandler(async (req, res, next) => {
    const { location } = req.body;

    const data = {
        location,
    };

    cleanseData(data);

    const rows = await db.one('INSERT INTO Locations (${this:name}) VALUES (${this:csv}) RETURNING *', data);

    res.status(201).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Delete single location by location id
 * @route   DELETE /api/listing-locations/:id
 * @access  Admin
 */
export const deleteLocation = asyncHandler(async (req, res, next) => {
    const rows = await db.one('DELETE FROM Locations WHERE location_id = $1 RETURNING *', req.params.id);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

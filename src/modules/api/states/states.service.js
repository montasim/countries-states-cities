/**
 * @fileoverview Service layer for handling state-related data interactions.
 * This file includes functions that interact directly with the database to retrieve states or specific states
 * based on country ISO codes. It manages querying, error handling, and response formatting.
 *
 * @requires loggerService: Utility for logging messages and errors.
 * @requires httpStatus: Constants providing HTTP status codes.
 * @requires errorResponse: Function to format and return error responses.
 * @requires sendResponse: Function to format and return success responses.
 * @requires CountryModel: Mongoose model for accessing state data (should be renamed to StateModel for clarity).
 */

import loggerService from '../../../service/logger.service.js';
import httpStatus from '../../../constant/httpStatus.constants.js';
import errorResponse from '../../../utilities/errorResponse.js';
import sendResponse from '../../../utilities/sendResponse.js';
import CountryModel from './states.model.js';

/**
 * Fetches all states based on query parameters provided.
 * @param {Object} query - Query parameters for filtering states.
 * @returns {Promise<Object>} A promise that resolves to a formatted response containing the state data or an error message.
 */
const fetchAllStates = async (query) => {
    try {
        // Construct a dynamic query based on provided parameters
        const conditions = {};
        Object.keys(query).forEach((key) => {
            // Ensure the query key is a valid model property
            if (CountryModel.schema.paths[key]) {
                conditions[key] = query[key];
            }
        });

        // Fetch states from the database using the constructed conditions
        const states = await CountryModel.find(conditions);

        // Check if states exist in the database
        if (states.length === 0) {
            return errorResponse(
                'No states found matching the provided criteria.',
                httpStatus.NOT_FOUND
            );
        }

        // Successfully retrieved states
        return sendResponse(
            states,
            `Successfully retrieved states matching criteria.`,
            httpStatus.OK
        );
    } catch (error) {
        // Log and return error if the operation fails
        loggerService.error(`Failed to get states: ${error}`);

        return errorResponse(
            error.message || 'Failed to retrieve states.',
            httpStatus.INTERNAL_SERVER_ERROR
        );
    }
};

/**
 * Fetches states for a specific country based on the country's ISO code.
 * @param {string} ciso - The ISO code of the country.
 * @returns {Promise<Object>} A promise that resolves to a formatted response containing the states of the specified country or an error message.
 */
const fetchStatesByCountryISO = async (ciso) => {
    try {
        // Fetch all states from the database
        const states = await CountryModel.findOne({ iso2: ciso });

        // Check if states exist in the database
        if (states.length === 0) {
            return errorResponse(
                'No country found in the database.',
                httpStatus.NOT_FOUND
            );
        }

        // Successfully retrieved all states
        return sendResponse(
            states,
            'Successfully retrieved the country.',
            httpStatus.OK
        );
    } catch (error) {
        // Log and return error if the operation fails
        loggerService.error(`Failed to get the country: ${error}`);

        return errorResponse(
            error.message || 'Failed to retrieve teh country.',
            httpStatus.INTERNAL_SERVER_ERROR
        );
    }
};

const statesService = {
    fetchAllStates,
    fetchStatesByCountryISO,
};

export default statesService;

/**
 * @fileoverview Service layer for managing city-related data interactions.
 * This service handles the retrieval of city data from the database based on country ISO codes. It includes
 * functions to fetch city data, handle possible errors, and return either the data or an error response.
 *
 * @requires loggerService: Service for logging messages and errors.
 * @requires httpStatus: Constants providing HTTP status codes.
 * @requires errorResponse: Function to format and return error responses.
 * @requires sendResponse: Function to format and return successful responses.
 * @requires CountryModel: Mongoose model for accessing city data (should likely be renamed to CitiesModel for accuracy).
 */

import loggerService from '../../../service/logger.service.js';
import httpStatus from '../../../constant/httpStatus.constants.js';
import errorResponse from '../../../utilities/errorResponse.js';
import sendResponse from '../../../utilities/sendResponse.js';
import CountryModel from './cities.model.js';

/**
 * Fetches cities associated with a specific country based on the country's ISO code.
 * @param {string} ciso - The ISO code of the country to fetch cities from.
 * @returns {Promise<Object>} A promise that resolves to a formatted response containing either the city data or an error message.
 */
const getCitiesWithinCountry = async (ciso) => {
    try {
        // Fetch cities from the database using the constructed conditions
        const cities = await CountryModel.find({ country_code: ciso }).lean();

        // Check if cities exist in the database
        if (cities.length === 0) {
            return errorResponse(
                'No cities found.',
                httpStatus.NOT_FOUND
            );
        }

        // Successfully retrieved cities
        return sendResponse(
            cities,
            `Successfully retrieved cities.`,
            httpStatus.OK
        );
    } catch (error) {
        // Log and return error if the operation fails
        loggerService.error(`Failed to get cities: ${error}`);

        return errorResponse(
            error.message || 'Failed to retrieve cities.',
            httpStatus.INTERNAL_SERVER_ERROR
        );
    }
};

const citiesService = {
    getCitiesWithinCountry,
};

export default citiesService;

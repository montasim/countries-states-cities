import loggerService from '../../../service/logger.service.js';
import httpStatus from '../../../constant/httpStatus.constants.js';
import errorResponse from '../../../utilities/errorResponse.js';
import sendResponse from '../../../utilities/sendResponse.js';
import CountryModel from './cities.model.js';

const getCitiesWithinCountry = async (ciso) => {
    try {
        // Fetch cities from the database using the constructed conditions
        const cities = await CountryModel.find({ country_code: ciso });

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

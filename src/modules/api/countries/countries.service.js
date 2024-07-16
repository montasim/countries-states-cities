import loggerService from '../../../service/logger.service.js';
import httpStatus from '../../../constant/httpStatus.constants.js';
import errorResponse from '../../../utilities/errorResponse.js';
import sendResponse from '../../../utilities/sendResponse.js';
import CountryModel from './countries.model.js';

const get = async (query) => {
    try {
        // Construct a dynamic query based on provided parameters
        const conditions = {};
        Object.keys(query).forEach((key) => {
            // Ensure the query key is a valid model property
            if (CountryModel.schema.paths[key]) {
                conditions[key] = query[key];
            }
        });

        // Fetch countries from the database using the constructed conditions
        const countries = await CountryModel.find(conditions);

        // Check if countries exist in the database
        if (countries.length === 0) {
            return errorResponse(
                'No countries found matching the provided criteria.',
                httpStatus.NOT_FOUND
            );
        }

        // Successfully retrieved countries
        return sendResponse(
            countries,
            `Successfully retrieved countries matching criteria.`,
            httpStatus.OK
        );
    } catch (error) {
        // Log and return error if the operation fails
        loggerService.error(`Failed to get countries: ${error}`);

        return errorResponse(
            error.message || 'Failed to retrieve countries.',
            httpStatus.INTERNAL_SERVER_ERROR
        );
    }
};

const getByCiso = async (ciso) => {
    try {
        // Fetch all countries from the database
        const countries = await CountryModel.findOne({ iso2: ciso });

        // Check if countries exist in the database
        if (countries.length === 0) {
            return errorResponse(
                'No country found in the database.',
                httpStatus.NOT_FOUND
            );
        }

        // Successfully retrieved all countries
        return sendResponse(
            countries,
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

const countriesService = {
    get,
    getByCiso,
};

export default countriesService;

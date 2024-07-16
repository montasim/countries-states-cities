import loggerService from '../../../service/logger.service.js';
import httpStatus from '../../../constant/httpStatus.constants.js';
import errorResponse from '../../../utilities/errorResponse.js';
import sendResponse from '../../../utilities/sendResponse.js';
import CountryModel from './states.model.js';

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

const getByCiso = async (ciso) => {
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
    get,
    getByCiso,
};

export default statesService;

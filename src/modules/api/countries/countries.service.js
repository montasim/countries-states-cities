/**
 * @fileoverview Service layer for handling business logic associated with country, state, and city data retrieval.
 * This file includes functions that interact directly with the database models to fetch and return data based
 * on specific criteria such as country ISO codes and state ISO codes. Error handling and response formatting are
 * managed within this layer.
 *
 * @requires loggerService: Service for logging error and info messages.
 * @requires httpStatus: Constants defining HTTP status codes.
 * @requires errorResponse: Utility to format error responses.
 * @requires sendResponse: Utility to format successful responses.
 * @requires CountryModel: Mongoose model for countries.
 * @requires StatesModel: Mongoose model for states.
 * @requires CitiesModel: Mongoose model for cities.
 */

import loggerService from '../../../service/logger.service.js';
import httpStatus from '../../../constant/httpStatus.constants.js';
import errorResponse from '../../../utilities/errorResponse.js';
import sendResponse from '../../../utilities/sendResponse.js';
import CountryModel from './countries.model.js';
import StatesModel from "../states/states.model.js";
import CitiesModel from "../cities/cities.model.js";

/**
 * Fetches all countries based on query parameters.
 * @param {Object} query - Query parameters for filtering countries.
 * @returns {Promise<Object>} A promise that resolves to the response object formatted by sendResponse utility.
 */
const fetchAllCountries = async (query) => {
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
        const countries = await CountryModel.find(conditions).lean();

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

/**
 * Fetches a single country by its ISO code.
 * @param {string} ciso - Country ISO code.
 * @returns {Promise<Object>} A promise that resolves to the response object formatted by sendResponse utility.
 */
const fetchCountryByISO = async (ciso) => {
    try {
        // Fetch all countries from the database
        const countries = await CountryModel.findOne({ iso2: ciso }).lean();

        console.log(countries)
        console.log(typeof countries)

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

/**
 * Fetches states for a given country using the country's ISO code.
 * @param {string} ciso - Country ISO code.
 * @returns {Promise<Object>} A promise that resolves to the response object formatted by sendResponse utility.
 */
const fetchStateByCountryISO = async (ciso) => {
    try {
        // Fetch all countries from the database
        const country = await StatesModel.find({ country_code: ciso }).lean();

        // Check if countries exist in the database
        if (country.length === 0) {
            return errorResponse(
                'No country found in the database.',
                httpStatus.NOT_FOUND
            );
        }

        // Successfully retrieved all countries
        return sendResponse(
            country,
            'Successfully retrieved the state.',
            httpStatus.OK
        );
    } catch (error) {
        // Log and return error if the operation fails
        loggerService.error(`Failed to get the state: ${error}`);

        return errorResponse(
            error.message || 'Failed to retrieve teh state.',
            httpStatus.INTERNAL_SERVER_ERROR
        );
    }
};

/**
 * Fetches a specific state within a country by both country and state ISO codes.
 * @param {string} ciso - Country ISO code.
 * @param {string} siso - State ISO code.
 * @returns {Promise<Object>} A promise that resolves to the response object formatted by sendResponse utility.
 */
const fetchStateByISO = async (ciso, siso) => {
    try {
        // Fetch all countries from the database
        const country = await CountryModel.findOne({ iso2: ciso }).lean();

        // Check if countries exist in the database
        if (country.length === 0) {
            return errorResponse(
                'No country found in the database.',
                httpStatus.NOT_FOUND
            );
        }

        // Filter for the specific state within the country's states
        const state = await StatesModel.findOne(
            { country_code: ciso, state_code: siso },
        ).lean();

        console.log(state)
        if (!state) {
            return errorResponse(
                'No state found in the database.',
                httpStatus.NOT_FOUND
            );
        }

        // Successfully retrieved all countries
        return sendResponse(
            state,
            'Successfully retrieved the state.',
            httpStatus.OK
        );
    } catch (error) {
        // Log and return error if the operation fails
        loggerService.error(`Failed to get the state: ${error}`);

        return errorResponse(
            error.message || 'Failed to retrieve the state.',
            httpStatus.INTERNAL_SERVER_ERROR
        );
    }
};

/**
 * Fetches cities within a state identified by country and state ISO codes.
 * @param {string} ciso - Country ISO code.
 * @param {string} siso - State ISO code.
 * @returns {Promise<Object>} A promise that resolves to the response object formatted by sendResponse utility.
 */
const fetchCitiesByStateISO = async (ciso, siso) => {
    try {
        // Filter for the specific state within the country's states
        const cities = await CitiesModel.find(
            { country_code: ciso, state_code: siso },
        ).lean();

        if (!cities) {
            return errorResponse(
                'No cities found in the database.',
                httpStatus.NOT_FOUND
            );
        }

        // Successfully retrieved all countries
        return sendResponse(
            cities,
            'Successfully retrieved the cities.',
            httpStatus.OK
        );
    } catch (error) {
        // Log and return error if the operation fails
        loggerService.error(`Failed to get the cities: ${error}`);

        return errorResponse(
            error.message || 'Failed to retrieve the cities.',
            httpStatus.INTERNAL_SERVER_ERROR
        );
    }
};

const countriesService = {
    fetchAllCountries,
    fetchCountryByISO,
    fetchStateByCountryISO,
    fetchStateByISO,
    fetchCitiesByStateISO,
};

export default countriesService;

/**
 * @fileoverview Controller for state-related operations.
 * This file handles the HTTP requests concerning states within countries. It uses services to fetch data
 * and then sends that data back to the client. This includes fetching all states or states specific to a country.
 *
 * @requires asyncErrorHandler: A utility to handle errors gracefully during asynchronous operations.
 * @requires statesService: A service layer managing the business logic for state data operations.
 */

import asyncErrorHandler from '../../../utilities/asyncErrorHandler.js';
import statesService from './states.service.js';

/**
 * Fetches all states based on query parameters and sends a formatted response.
 * The function handles GET requests to retrieve state data across all countries or filtered by specific criteria.
 *
 * @param {Object} req - The HTTP request object, containing query parameters.
 * @param {Object} res - The HTTP response object used to send back the retrieved data.
 */
const fetchAllStates = asyncErrorHandler(async (req, res) => {
    const query = req.query;
    const countriesData = await statesService.fetchAllStates(query);

    countriesData.route = req.originalUrl; // Optional: Track the requested URL

    res.status(countriesData.status).send(countriesData);
});

/**
 * Fetches states by a specific country ISO code and sends a formatted response.
 * This function specifically handles GET requests to retrieve states within the specified country.
 *
 * @param {Object} req - The HTTP request object, containing route parameters such as 'ciso' for country ISO.
 * @param {Object} res - The HTTP response object used to send back the retrieved data.
 */
const fetchStateByCountryISO = asyncErrorHandler(async (req, res) => {
    const countriesData = await statesService.fetchStatesByCountryISO(req.params.ciso);

    countriesData.route = req.originalUrl;

    res.status(countriesData.status).send(countriesData);
});

const statesController = {
    fetchAllStates,
    fetchStateByCountryISO,
};

export default statesController;

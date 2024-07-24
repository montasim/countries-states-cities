/**
 * @fileoverview Controller for country-related operations.
 * This file includes controllers that handle requests to fetch countries, states, and cities based
 * on different criteria such as country ISO codes and state ISO codes. Each controller is designed
 * to fetch data using the corresponding service and send responses to the client.
 *
 * @requires asyncErrorHandler: Middleware to handle errors in asynchronous operations gracefully.
 * @requires countriesService: Service layer handling business logic related to country data.
 * @requires citiesService: Service layer handling business logic related to city data within countries.
 */

import asyncErrorHandler from '../../../utilities/asyncErrorHandler.js';
import countriesService from './countries.service.js';
import citiesService from "../cities/cities.service.js";

/**
 * Fetches all countries based on query parameters and sends a formatted response.
 * @param {Object} req - Express request object containing query parameters.
 * @param {Object} res - Express response object used to send back data.
 */
const fetchAllCountries = asyncErrorHandler(async (req, res) => {
    const response = await countriesService.fetchAllCountries(req.query);

    response.route = req.originalUrl; // Optional: Track the requested URL

    res.status(response.status).send(response);
});

/**
 * Fetches a single country by its ISO code and sends a formatted response.
 * @param {Object} req - Express request object with parameters including 'ciso' for country ISO.
 * @param {Object} res - Express response object for sending the response.
 */
const fetchCountryByISO = asyncErrorHandler(async (req, res) => {
    const response = await countriesService.fetchCountryByISO(req.params.ciso);

    response.route = req.originalUrl;

    res.status(response.status).send(response);
});

/**
 * Fetches cities within a country identified by its ISO code and sends a formatted response.
 * @param {Object} req - Express request object with parameters including 'ciso' for country ISO.
 * @param {Object} res - Express response object for sending the response.
 */
const fetchCitiesByCountryISO = asyncErrorHandler(async (req, res) => {
    const response = await citiesService.getCitiesWithinCountry(req.params.ciso);

    response.route = req.originalUrl;

    res.status(response.status).send(response);
});

/**
 * Fetches states within a country identified by its ISO code and sends a formatted response.
 * @param {Object} req - Express request object with parameters including 'ciso' for country ISO.
 * @param {Object} res - Express response object for sending the response.
 */
const fetchStateByCountryISO = asyncErrorHandler(async (req, res) => {
    const response = await countriesService.fetchStateByCountryISO(req.params.ciso);

    response.route = req.originalUrl;

    res.status(response.status).send(response);
});

/**
 * Fetches a specific state by country and state ISO codes and sends a formatted response.
 * @param {Object} req - Express request object with parameters including 'ciso' and 'siso' for country and state ISO codes.
 * @param {Object} res - Express response object for sending the response.
 */
const fetchStateByISO  = asyncErrorHandler(async (req, res) => {
    const response = await countriesService.fetchStateByISO(req.params.ciso, req.params.siso);

    response.route = req.originalUrl;

    res.status(response.status).send(response);
});

/**
 * Fetches cities within a state identified by country and state ISO codes and sends a formatted response.
 * @param {Object} req - Express request object with parameters including 'ciso' and 'siso' for country and state ISO codes.
 * @param {Object} res - Express response object for sending the response.
 */
const fetchCitiesByStateISO  = asyncErrorHandler(async (req, res) => {
    const response = await countriesService.fetchCitiesByStateISO(req.params.ciso, req.params.siso);

    response.route = req.originalUrl;

    res.status(response.status).send(response);
});

const countriesController = {
    fetchAllCountries,
    fetchCountryByISO,
    fetchCitiesByCountryISO,
    fetchStateByCountryISO,
    fetchStateByISO,
    fetchCitiesByStateISO,
};

export default countriesController;

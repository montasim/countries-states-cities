/**
 * @fileoverview Routes configuration for country-related operations.
 * This file defines routes for fetching country data, including states and cities within those countries.
 * It uses Express Router to define paths and their corresponding handlers.
 *
 * @requires express: Express.js framework for building web applications
 * @requires methodNotSupported: Middleware to handle unsupported methods on routes
 * @requires cacheMiddleware: Middleware to cache responses
 * @requires configuration: Configuration settings for caching and other operations
 * @requires countriesController: Controllers that handle the business logic for country-related requests
 */

import express from 'express';

import methodNotSupported from '../../../shared/methodNotSupported.js';
import cacheMiddleware from '../../../middleware/cache.middleware.js';
import configuration from '../../../configuration/configuration.js';
import countriesController from './countries.controller.js';

const router = express.Router();

/**
 * Route serving a list of all countries. Can be cached based on configuration settings.
 * GET: Fetches all countries
 * ALL OTHERS: Returns method not supported response
 */
router
    .route('/')
    .get(
        cacheMiddleware.create(configuration.cache.timeout),
        countriesController.fetchAllCountries
    )
    .all(methodNotSupported);

/**
 * Route serving specific country data identified by ISO code.
 * GET: Fetches a single country by its ISO code (ciso parameter)
 * ALL OTHERS: Returns method not supported response
 */
router
    .route('/:ciso')
    .get(
        cacheMiddleware.create(configuration.cache.timeout),
        countriesController.fetchCountryByISO
    )
    .all(methodNotSupported);

/**
 * Route serving cities within a specific country, identified by the country's ISO code.
 * GET: Fetches all cities within a given country
 * ALL OTHERS: Returns method not supported response
 */
router
    .route('/:ciso/cities')
    .get(
        cacheMiddleware.create(configuration.cache.timeout),
        countriesController.fetchCitiesByCountryISO
    )
    .all(methodNotSupported);

/**
 * Route serving states within a specific country, identified by the country's ISO code.
 * GET: Fetches all states within a given country
 * ALL OTHERS: Returns method not supported response
 */
router
    .route('/:ciso/states')
    .get(
        cacheMiddleware.create(configuration.cache.timeout),
        countriesController.fetchStateByCountryISO
    )
    .all(methodNotSupported);

/**
 * Route serving specific state data within a country, identified by country and state ISO codes.
 * GET: Fetches a specific state by country and state ISO codes
 * ALL OTHERS: Returns method not supported response
 */
router
    .route('/:ciso/states/:siso')
    .get(
        cacheMiddleware.create(configuration.cache.timeout),
        countriesController.fetchStateByISO
    )
    .all(methodNotSupported);

/**
 * Route serving cities within a specific state, identified by country and state ISO codes.
 * GET: Fetches all cities within a specified state
 * ALL OTHERS: Returns method not supported response
 */
router
    .route('/:ciso/states/:siso/cities')
    .get(
        cacheMiddleware.create(configuration.cache.timeout),
        countriesController.fetchCitiesByStateISO
    )
    .all(methodNotSupported);

export default router;

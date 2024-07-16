/**
 * @fileoverview Routes configuration for state-related operations.
 * This file sets up the Express routes to handle requests concerning states within countries,
 * leveraging middleware for caching and handling unsupported methods.
 *
 * @requires express: Express.js framework for routing.
 * @requires methodNotSupported: Middleware to handle and respond to unsupported HTTP methods.
 * @requires cacheMiddleware: Middleware to apply caching mechanisms to responses.
 * @requires configuration: Application-specific configurations, such as cache settings.
 * @requires statesController: Controller functions handling the logic for state-related requests.
 */

import express from 'express';

import methodNotSupported from '../../../shared/methodNotSupported.js';
import cacheMiddleware from '../../../middleware/cache.middleware.js';
import configuration from '../../../configuration/configuration.js';
import statesController from './states.controller.js';

const router = express.Router();

/**
 * Route serving a list of all states across all countries. Can be cached based on configuration settings.
 * GET: Fetches all states
 * ALL OTHERS: Handled by methodNotSupported to ensure only GET requests are processed
 */
router
    .route('/')
    .get(
        cacheMiddleware.create(configuration.cache.timeout),
        statesController.fetchAllStates
    )
    .all(methodNotSupported);

/**
 * Route serving state data for a specific country identified by its ISO code (ciso).
 * GET: Fetches states by the country's ISO code
 * ALL OTHERS: Handled by methodNotSupported to restrict methods other than GET
 */
router
    .route('/:ciso')
    .get(
        cacheMiddleware.create(configuration.cache.timeout),
        statesController.fetchStateByCountryISO
    )
    .all(methodNotSupported);

export default router;

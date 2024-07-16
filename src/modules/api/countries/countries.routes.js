import express from 'express';

import methodNotSupported from '../../../shared/methodNotSupported.js';
import cacheMiddleware from '../../../middleware/cache.middleware.js';
import configuration from '../../../configuration/configuration.js';
import countriesController from './countries.controller.js';

const router = express.Router();

router
    .route('/')
    .get(
        // cacheMiddleware.create(configuration.cache.timeout),
        countriesController.get
    )
    .all(methodNotSupported);

router
    .route('/:ciso')
    .get(
        // cacheMiddleware.create(configuration.cache.timeout),
        countriesController.getByCiso
    )
    .all(methodNotSupported);

router
    .route('/:ciso/cities')
    .get(
        // cacheMiddleware.create(configuration.cache.timeout),
        countriesController.getCitiesWithinCountry
    )
    .all(methodNotSupported);

router
    .route('/:ciso/states')
    .get(
        // cacheMiddleware.create(configuration.cache.timeout),
        countriesController.getStateByCiso
    )
    .all(methodNotSupported);

router
    .route('/:ciso/states/:siso')
    .get(
        // cacheMiddleware.create(configuration.cache.timeout),
        countriesController.getStateByISO2
    )
    .all(methodNotSupported);

router
    .route('/:ciso/states/:siso/cities')
    .get(
        // cacheMiddleware.create(configuration.cache.timeout),
        countriesController.getCitiesInAState
    )
    .all(methodNotSupported);

export default router;

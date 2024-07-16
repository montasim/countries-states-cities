import express from 'express';

import methodNotSupported from '../../../shared/methodNotSupported.js';
import cacheMiddleware from '../../../middleware/cache.middleware.js';
import configuration from '../../../configuration/configuration.js';
import statesController from './cities.controller.js';

const router = express.Router();

router
    .route('/')
    .get(
        // cacheMiddleware.create(configuration.cache.timeout),
        statesController.get
    )
    .all(methodNotSupported);

router
    .route('/:ciso')
    .get(
        // cacheMiddleware.create(configuration.cache.timeout),
        statesController.getByCiso
    )
    .all(methodNotSupported);

export default router;

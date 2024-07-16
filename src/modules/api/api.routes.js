import express from 'express';

import countriesRoutes from './countries/countries.routes.js';
import statesRoutes from "./states/states.routes.js";

const router = express.Router();

router.use('/countries', countriesRoutes);
router.use('/states', statesRoutes);

export default router;

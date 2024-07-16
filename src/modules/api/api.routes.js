import express from 'express';

import countriesRoutes from './countries/countries.routes.js';

const router = express.Router();

router.use('/countries', countriesRoutes);

export default router;

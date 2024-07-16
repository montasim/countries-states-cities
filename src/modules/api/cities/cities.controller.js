import asyncErrorHandler from '../../../utilities/asyncErrorHandler.js';
import statesService from './cities.service.js';

const get = asyncErrorHandler(async (req, res) => {
    const query = req.query;
    const countriesData = await statesService.get(query);

    countriesData.route = req.originalUrl; // Optional: Track the requested URL

    res.status(countriesData.status).send(countriesData);
});

const getByCiso = asyncErrorHandler(async (req, res) => {
    const countriesData = await statesService.getByCiso(req.params.ciso);

    countriesData.route = req.originalUrl;

    res.status(countriesData.status).send(countriesData);
});

const citiesController = {
    get,
    getByCiso,
};

export default citiesController;

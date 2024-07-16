import asyncErrorHandler from '../../../utilities/asyncErrorHandler.js';
import countriesService from './countries.service.js';

const get = asyncErrorHandler(async (req, res) => {
    const query = req.query;
    const countriesData = await countriesService.get(query);

    countriesData.route = req.originalUrl; // Optional: Track the requested URL

    res.status(countriesData.status).send(countriesData);
});

const getByCiso = asyncErrorHandler(async (req, res) => {
    const countriesData = await countriesService.getByCiso(req.params.ciso);

    countriesData.route = req.originalUrl;

    res.status(countriesData.status).send(countriesData);
});

const countriesController = {
    get,
    getByCiso,
};

export default countriesController;

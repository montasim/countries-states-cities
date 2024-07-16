import asyncErrorHandler from '../../../utilities/asyncErrorHandler.js';
import countriesService from './countries.service.js';
import citiesService from "../cities/cities.service.js";

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

const getCitiesWithinCountry = asyncErrorHandler(async (req, res) => {
    const citiesData = await citiesService.getCitiesWithinCountry(req.params.ciso);

    citiesData.route = req.originalUrl;

    res.status(citiesData.status).send(citiesData);
});

const getStateByCiso = asyncErrorHandler(async (req, res) => {
    const countriesData = await countriesService.getStateByCiso(req.params.ciso);

    countriesData.route = req.originalUrl;

    res.status(countriesData.status).send(countriesData);
});

const getStateByISO2 = asyncErrorHandler(async (req, res) => {
    const countriesData = await countriesService.getStateByISO2(req.params.ciso, req.params.siso);

    countriesData.route = req.originalUrl;

    res.status(countriesData.status).send(countriesData);
});

const getCitiesInAState = asyncErrorHandler(async (req, res) => {
    const countriesData = await countriesService.getCitiesInAState(req.params.ciso, req.params.siso);

    countriesData.route = req.originalUrl;

    res.status(countriesData.status).send(countriesData);
});

const countriesController = {
    get,
    getByCiso,
    getCitiesWithinCountry,
    getStateByCiso,
    getStateByISO2,
    getCitiesInAState,
};

export default countriesController;

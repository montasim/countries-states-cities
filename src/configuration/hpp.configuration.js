import hpp from 'hpp';

import loggerService from '../service/logger.service.js';

const hppConfiguration = (options) => {
    return (req, res, next) => {
        // Check for multiple instances of sensitive parameters
        const sensitiveParams = ['user', 'auth', 'token'];

        sensitiveParams.forEach((param) => {
            if (req.query[param] && Array.isArray(req.query[param])) {
                loggerService.warn(
                    `HPP attempt detected on parameter: ${param}`,
                    req.query[param]
                );
                // Optionally, handle this as an incident report
            }
        });

        // Use the standard HPP middleware with configured options
        return hpp(options)(req, res, next);
    };
};

export default hppConfiguration;

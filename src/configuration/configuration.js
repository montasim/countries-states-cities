import dotenv from 'dotenv';
import Joi from 'joi';

import environment from '../constant/envTypes.constants.js';

dotenv.config({
    path: `.env.${process.env.NODE_ENV || environment.DEVELOPMENT}`,
});

/**
 * Parses environment variables to integers with a default value.
 * @param {string} envVar - The environment variable.
 * @param {number} defaultValue - The default value if parsing fails.
 * @returns {number} - The parsed integer or the default value.
 */
const getInt = (envVar, defaultValue) => {
    const parsed = parseInt(envVar, 10);

    return isNaN(parsed) ? defaultValue : parsed;
};

/**
 * Handles undefined, null, or empty values with a default value.
 * @param {string} envVar - The environment variable.
 * @param {*} defaultValue - The default value if the environment variable is undefined, null, or empty.
 * @returns {*} - The environment variable or the default value.
 */
const getEnvVar = (envVar, defaultValue) => {
    if (envVar === undefined || envVar === null || envVar === '') {
        return defaultValue;
    }

    return envVar;
};

// Base MongoDB URL which might be appended with '-test' for test environment
const mongoDbUrl =
    getEnvVar(process.env.MONGODB_URL, '') +
    (process.env.NODE_ENV === environment.TEST ? '-test' : '');

const envVarsSchema = Joi.object({
    NODE_ENV: Joi.string()
        .valid(
            environment.PRODUCTION,
            environment.STAGING,
            environment.DEVELOPMENT,
            environment.TEST
        )
        .required()
        .description('The application environment.'),
    GITHUB_REPOSITORY: Joi.string()
        .required()
        .description('GitHub repository URL.'),
    VERSION: Joi.string()
        .valid('v1', 'v2', 'v3', 'v4', 'v5')
        .required()
        .description('The API version to use.'),
    PORT: Joi.number().required().description('The server port.'),
    MONGODB_URL: Joi.string().required().description('MongoDB URL.'),
    TIMEOUT_IN_SECONDS: Joi.number()
        .required()
        .description('Timeout in seconds.'),
    CACHE_TTL_IN_SECONDS: Joi.number()
        .required()
        .description('Cache TTL in seconds.'),
    JSON_PAYLOAD_LIMIT: Joi.number()
        .required()
        .description('JSON payload limit in bytes.'),
    CORS_METHODS: Joi.string().required().description('CORS methods.'),
    SMTP_HOST: Joi.string()
        .required()
        .description('Server that will send the emails.'),
    SMTP_PORT: Joi.number()
        .required()
        .description('Port to connect to the email server.'),
    SMTP_USERNAME: Joi.string()
        .required()
        .description('Username for email server.'),
    SMTP_PASSWORD: Joi.string()
        .required()
        .description('Password for email server.'),
    EMAIL_FROM: Joi.string()
        .required()
        .description('The "from" field in the emails sent by the app.'),
    ADMIN_EMAIL: Joi.string().email().required().description('Admin email.'),
}).unknown();

const { value: envVars, error } = envVarsSchema.validate(process.env, {
    abortEarly: false,
});

if (error) {
    throw new Error(
        `Config validation error: ${error.details.map((x) => x.message).join(', ')}`
    );
}

/**
 * Configuration object for the application.
 */
const configuration = {
    env: getEnvVar(envVars.NODE_ENV, environment.DEVELOPMENT),
    github: {
        repository: getEnvVar(envVars.GITHUB_REPOSITORY, ''),
    },
    version: getEnvVar(envVars.VERSION, 'v1'),
    port: getInt(getEnvVar(envVars.PORT, 3000), 3000),
    mongoose: {
        url: mongoDbUrl,
    },
    timeout: getInt(envVars.TIMEOUT_IN_SECONDS, 30),
    cache: {
        timeout: getInt(envVars.CACHE_TTL_IN_SECONDS, 60),
    },
    jsonPayloadLimit: getInt(envVars.JSON_PAYLOAD_LIMIT, 1000000),
    cors: {
        methods: getEnvVar(envVars.CORS_METHODS, '')
            .split(',')
            .map((method) => method.trim()),
    },
    rateLimit: {
        windowMs: getInt(envVars.RATE_LIMIT_WINDOW_MS, 60000),
        max: getInt(envVars.RATE_LIMIT_MAX, 100),
    },
    email: {
        smtp: {
            host: getEnvVar(envVars.SMTP_HOST, 'localhost'),
            port: getInt(envVars.SMTP_PORT, 587),
            auth: {
                user: getEnvVar(envVars.SMTP_USERNAME, ''),
                pass: getEnvVar(envVars.SMTP_PASSWORD, ''),
            },
        },
        from: getEnvVar(envVars.EMAIL_FROM, 'no-reply@example.com'),
    },
    admin: {
        email: getEnvVar(envVars.ADMIN_EMAIL, 'admin@example.com'),
    },
};

export default configuration;

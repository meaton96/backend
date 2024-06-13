'use strict';

/**
 * logo-large service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::logo-large.logo-large');

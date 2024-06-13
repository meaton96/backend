'use strict';

/**
 * logo-small service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::logo-small.logo-small');

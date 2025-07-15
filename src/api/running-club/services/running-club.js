'use strict';

/**
 * running-club service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::running-club.running-club');

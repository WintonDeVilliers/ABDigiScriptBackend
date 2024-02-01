'use strict';

/**
 * passport-customer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::passport-customer.passport-customer');

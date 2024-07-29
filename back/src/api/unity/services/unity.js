'use strict';

/**
 * unity service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::unity.unity');

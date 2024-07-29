'use strict';

/**
 * unity controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::unity.unity');

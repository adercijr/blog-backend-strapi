'use strict';
const axios = require('axios')

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async afterCreate(result, data) {
      axios.post('https://api.netlify.com/build_hooks/606e38a76ac8c55d87946db4')
    },
    async afterUpdate(result, params,  data) {
      axios.post('https://api.netlify.com/build_hooks/606e38a76ac8c55d87946db4')
    },
    async beforeDelete(result, params) {
      axios.post('https://api.netlify.com/build_hooks/606e38a76ac8c55d87946db4')
    }
  }
};

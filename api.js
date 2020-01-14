const axios = require('axios');

axios.default.headers = {
    'Authorization': 'Basic Y2xpZW50OnNlY3JldA==',
    'Content-Type': 'application/x-www-form-urlencoded'
},
axios.defaults.baseURL = 'http://localhost:3000';

module.exports = axios;
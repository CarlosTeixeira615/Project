import axios from 'axios';
/* 
https://dev-caracol-api.herokuapp.com
https://caracol-api.herokuapp.com
*/
const api = axios.create({
  baseURL: 'http://0.0.0.0:3333',
  validateStatus: function (status) {
    return status >= 200 && status < 1000; // default
  },
});

export default api;

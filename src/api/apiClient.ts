import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
// axios.defaults.withCredentials = true;

const baseURL = '';
const apiClient = axios.create({
  baseURL,
  timeout: 10000,
});

export default apiClient;

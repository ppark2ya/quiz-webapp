import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';

const baseURL = process.env.REACT_APP_BASE_URL;
const apiClient = axios.create({
  baseURL,
  timeout: 10000,
});

export default apiClient;

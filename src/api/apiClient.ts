import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';

const baseURL = 'https://opentdb.com/api.php';
const apiClient = axios.create({
  baseURL,
  timeout: 10000,
});

export default apiClient;

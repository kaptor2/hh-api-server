import axios from 'axios';
axios.defaults.baseURL = process.env.API_HH_URL;
axios.defaults.withCredentials = true;
export default axios;
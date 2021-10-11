import axios from 'axios';
// instance overrides global axios
// global interceptors are overriden by instance interceptors
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;
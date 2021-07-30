import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.1.11:3001'
});
axios.defaults.headers.post['Content-Type']= 'application/json';

export default instance;
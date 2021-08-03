import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-audio-library-default-rtdb.firebaseio.com/'
});
axios.defaults.headers.post['Content-Type']= 'application/json';

export default instance;
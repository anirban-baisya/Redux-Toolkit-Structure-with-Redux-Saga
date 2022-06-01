//creating axios instance so that we can call it multiple times
import axios from 'axios';

export default axios.create({
    baseURL: 'http://192.168.0.123:8080/', // http://localhost / current IP
    headers: {
        'Content-Type': 'application/json'
    }
})
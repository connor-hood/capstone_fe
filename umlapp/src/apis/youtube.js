import axios from 'axios';
import my_API_KEY from './APIKEYS'
const KEY = my_API_KEY; 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})
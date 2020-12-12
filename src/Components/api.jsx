import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers : {
        Authorization: `Client-ID ${process.env.UNSPLASH_SECRET}`,
        'Accept-Version' : 'v1'
    }
});

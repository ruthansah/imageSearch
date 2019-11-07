import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 576174a8ee5461cc2a83bb0ba8bec4adb76ddee6483a7f287d7e838576729c15'
    }
});
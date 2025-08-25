import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (paths, options) => {
    const response = await request.get(paths, options);
    return response.data;
};

export default request;

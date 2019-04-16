import axios from 'axios';



let instance = axios.create({
    baseURL: '/',
    // 请求超时时间
    timeout: 1000,
    headers: {'content-type':'application/json;charset=utf-8'}
});
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default instance

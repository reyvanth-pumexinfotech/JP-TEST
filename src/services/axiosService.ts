import axios from 'axios';

const axiosInstance = axios.create({
 //baseURL: 'http://localhost:5000/pumex'
 baseURL: 'https://api.pumexinfotech.com/pumex'
});

export default axiosInstance;

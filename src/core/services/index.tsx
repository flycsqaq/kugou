import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://47.107.147.152:3001/api/',
  timeout: 5000,
})

export default instance
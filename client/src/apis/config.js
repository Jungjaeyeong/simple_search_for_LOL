import axios from 'axios';

const BASE_URI = 'http://localhost:8000/';

const instance = (endPoint) =>
  axios.create({
    baseURL: `${BASE_URI}${endPoint}`,
    withCredentials: true,
  });

export const summoner = instance('summoner');

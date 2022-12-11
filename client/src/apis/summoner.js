import { summoner } from './config';

export const getTest = () => summoner.get('/test');

export const test = (nickname) => summoner.post('/', { nickname });

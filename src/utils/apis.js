import axios from 'axios';
import { BASE_URL } from 'src/constants/config';

const fetcher = axios.create({
  baseURL: BASE_URL,
});

export const apis = {
  getBanners: () => fetcher.get('/banners'),
  getAllTags: () => fetcher.get('/app-setting/tags'),
  getAllChallenges: () => fetcher.get('/challenges'),
};

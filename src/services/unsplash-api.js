import axios from 'axios';

const ACCESS_KEY = 'zaF8XOEs5quW_9cNShuMC-MKR0hnqN39fWf566nsx88';
const BASE_URL = 'https://api.unsplash.com';

const unsplashApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
  params: {
    per_page: 12,
    orientation: 'landscape',
  },
});

export const searchImages = async (query, page = 1) => {
  try {
    const response = await unsplashApi.get('/search/photos', {
      params: {
        query,
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Unsplash API Error:', error);
    throw new Error('Failed to fetch images. Please try again later.');
  }
};

export default unsplashApi;
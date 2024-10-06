const BASE_URL = import.meta.env.VITE_API_URL;

const API_ENDPOINTS = {
  PING: `${BASE_URL}/api/ping`,
  ITEMS: `${BASE_URL}/api/items`,
};

export default API_ENDPOINTS;

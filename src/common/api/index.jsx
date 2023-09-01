
const urlServer = 'https://june-corp-s.vercel.app'

import axios from "axios";

const api = {
  getMethod: async (url) => {
    const data = await axios.get(urlServer + url);
    return data.data;
  },
  postMethod: async (url, body) => {
    const data = await axios.post(urlServer + url, body);
    return data.data;
  },
  putMethod: async (url, body) => {
    const data = await axios.put(urlServer + url, body);
    return data.data;
  },
  deleteMethod: async (url) => {
    const data = await axios.delete(urlServer + url);
    return data.data;
  },
};

export default api;

import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '56bf20434bcb4b73852341254155bd73',
  },
});

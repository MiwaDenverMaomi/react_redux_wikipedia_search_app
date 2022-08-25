import axios from 'axios';

export const wikipedia= axios.create({
  baseURL: 'https://en.wikipedia.org/api/rest_v1/page/summary'
});

import { BASE_URL } from '@/constants/api';
import Axios from 'axios';

const axios = Axios.create({
  baseURL: BASE_URL,
});

export const client = {
  get: function <Response = unknown>(url: string) {
    return axios.get<Response>(url).then(res => res.data);
  },
};

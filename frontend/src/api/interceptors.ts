import axios from 'axios';
import { getJsonContentType } from '@/api/api.helpers';

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

export const $api = axios.create({
  baseURL: BASE_URL,
  headers: getJsonContentType(),
});

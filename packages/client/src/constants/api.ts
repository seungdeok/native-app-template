export const BASE_URL = 'http://localhost:3000';

export const API_PATH = {
  BASE: `${BASE_URL}`,
  AUTH: `${BASE_URL}/auth`,
} as const;

export type API_PATH = (typeof API_PATH)[keyof typeof API_PATH];

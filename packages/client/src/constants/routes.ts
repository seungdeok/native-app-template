export const ROUTE_PATH = {
  HOME: '/',
  ERROR_404: '/notfound',
} as const;

export type ROUTE_PATH = (typeof ROUTE_PATH)[keyof typeof ROUTE_PATH];

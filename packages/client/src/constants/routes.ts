const prefix = '/react';

export const ROUTE_PATH = {
  HOME: `${prefix}/home`,
  CALENDAR: `${prefix}/calendar`,
  SETTING: `${prefix}/setting`,
  ERROR_404: '/notfound',
} as const;

export type ROUTE_PATH = (typeof ROUTE_PATH)[keyof typeof ROUTE_PATH];

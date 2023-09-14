export const DEVICE_SIZES = {
  mobile: 1040,
} as const;

export const COLORS = {
  while: '#fff',
  black: '#000',
} as const;

export type DEVICE_SIZES = (typeof DEVICE_SIZES)[keyof typeof DEVICE_SIZES];
export type COLORS = (typeof COLORS)[keyof typeof COLORS];

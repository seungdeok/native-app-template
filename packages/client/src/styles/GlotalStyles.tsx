import React from 'react';
import { Global } from '@emotion/react';
import { resetStyles } from './reset';

export function GlobalStyles() {
  return <Global styles={resetStyles} />;
}

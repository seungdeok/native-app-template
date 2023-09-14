/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { theme } from '@/styles/theme';

export function Main({ children }: { children: React.ReactElement | null }) {
  return (
    <main
      css={css(`
        width: '100%',
        ${theme.mixins.flexBox('column')};
      `)}
    >
      {children}
    </main>
  );
}

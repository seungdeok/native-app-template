/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { theme } from '@/styles/theme';

export function Footer() {
  return (
    <footer
      css={css(`
        ${theme.mixins.flexBox('row', 'center', 'space-between')};
        padding: 40px 20px;
        border-top: 1px solid ${theme.colors.gray.eaeaea};
      `)}
    >
      <p
        css={css(`
          font-size: 14px;
          color: ${theme.colors.gray['747474']};
          text-align: center;
          width: 100%;
        `)}
      >
        Copyright 2023 @seungdeok. All rights reserved.
      </p>
    </footer>
  );
}

/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconMihomeSelect = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M940.78933333 344.02133333L591.78666667 72.58666667c-46.304-36.01066667-111.008-36.05333333-157.32266667 0L85.48266667 344.02133333c-31.44533333 24.448-49.46133333 61.312-49.46133334 101.12v402.15466667c0 70.656 57.46133333 128.11733333 128.11733334 128.11733333h697.984c70.656 0 128.11733333-57.46133333 128.11733333-128.11733333V445.14133333c0-39.808-18.016-76.672-49.45066667-101.12z m-390.95466666 398.72c0 20.26666667-16.43733333 36.704-36.704 36.704-20.26666667 0-36.704-16.43733333-36.704-36.704V498.304c0-20.26666667 16.43733333-36.704 36.704-36.704 20.26666667 0 36.704 16.43733333 36.704 36.704v244.43733333z"
        fill={getIconColor(color, 0, '#999999')}
      />
    </svg>
  );
};

IconMihomeSelect.defaultProps = {
  size: 18,
};

export default IconMihomeSelect;

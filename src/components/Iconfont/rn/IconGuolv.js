/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconGuolv = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M819.008 64a96 96 0 0 1 62.464 168.896l-231.936 198.72v418.752c0 12.864-2.56 25.6-7.488 37.376l-4.224 8.64a96 96 0 0 1-130.24 38.272L315.52 829.76a96 96 0 0 1-49.984-84.224l-0.064-313.92L33.536 232.896a96 96 0 0 1-33.088-63.616L0 160A96 96 0 0 1 96 64zM896 704a64 64 0 0 1 0 128h-128a64 64 0 0 1 0-128h128z m-163.456-512.064H182.464l211.008 180.864-0.064 353.664 128.128 69.952v-423.68L732.608 192zM896 512a64 64 0 0 1 0 128h-128a64 64 0 0 1 0-128h128z"
        fill={getIconColor(color, 0, '#ffffff')}
      />
    </Svg>
  );
};

IconGuolv.defaultProps = {
  size: 18,
};

IconGuolv = React.memo ? React.memo(IconGuolv) : IconGuolv;

export default IconGuolv;

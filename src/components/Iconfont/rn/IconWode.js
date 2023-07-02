/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconWode = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M394.5472 565.4016C205.2096 565.4016 51.2 717.9776 51.2 905.6768v20.224C51.2 1024 202.752 1024 394.5472 1024h203.7248c184.2688 0 343.3472 0 343.3472-98.0992v-20.224c0-187.5968-154.0096-340.2752-343.3472-340.2752h-203.776z m91.648-26.0096c149.9648 0 271.9232-120.9344 271.9232-269.6704C758.1184 120.9856 636.16 0 486.2464 0 336.2816 0 214.272 120.9856 214.272 269.7216c0 148.6848 122.0096 269.6704 271.9744 269.6704z"
        fill={getIconColor(color, 0, '#999999')}
      />
    </Svg>
  );
};

IconWode.defaultProps = {
  size: 18,
};

IconWode = React.memo ? React.memo(IconWode) : IconWode;

export default IconWode;

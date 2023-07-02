/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconHuiyuan = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M826.44334617 27.84268642H197.55665383L3.11700543 393.03193283 512 995.7689521l508.88299457-602.73701927L826.44334617 27.84268642zM701.00258765 324.29195061H322.99741235v-98.38490864h378.0051753v98.38490864z"
        fill={getIconColor(color, 0, '#999999')}
      />
    </svg>
  );
};

IconHuiyuan.defaultProps = {
  size: 18,
};

export default IconHuiyuan;

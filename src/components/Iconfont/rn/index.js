/* eslint-disable */

import React from 'react';

import IconZiyuan from './IconZiyuan';
import IconWode from './IconWode';
import IconXiaoxi from './IconXiaoxi';
import IconDongtai from './IconDongtai';
import IconHuiyuan from './IconHuiyuan';
import IconMihomeSelect from './IconMihomeSelect';
import IconGuolv from './IconGuolv';
export { default as IconZiyuan } from './IconZiyuan';
export { default as IconWode } from './IconWode';
export { default as IconXiaoxi } from './IconXiaoxi';
export { default as IconDongtai } from './IconDongtai';
export { default as IconHuiyuan } from './IconHuiyuan';
export { default as IconMihomeSelect } from './IconMihomeSelect';
export { default as IconGuolv } from './IconGuolv';

let IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'ziyuan':
      return <IconZiyuan key="1" {...rest} />;
    case 'wode':
      return <IconWode key="2" {...rest} />;
    case 'xiaoxi':
      return <IconXiaoxi key="3" {...rest} />;
    case 'dongtai':
      return <IconDongtai key="4" {...rest} />;
    case 'huiyuan':
      return <IconHuiyuan key="5" {...rest} />;
    case 'mihome_select':
      return <IconMihomeSelect key="6" {...rest} />;
    case 'guolv':
      return <IconGuolv key="7" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;

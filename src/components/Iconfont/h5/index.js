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

const IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'ziyuan':
      return <IconZiyuan {...rest} />;
    case 'wode':
      return <IconWode {...rest} />;
    case 'xiaoxi':
      return <IconXiaoxi {...rest} />;
    case 'dongtai':
      return <IconDongtai {...rest} />;
    case 'huiyuan':
      return <IconHuiyuan {...rest} />;
    case 'mihome_select':
      return <IconMihomeSelect {...rest} />;
    case 'guolv':
      return <IconGuolv {...rest} />;

  }

  return null;
};

export default IconFont;

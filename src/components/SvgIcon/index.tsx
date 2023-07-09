import { FC } from 'react';
// import { toXml } from 'react-svg';
import { renderToStaticMarkup } from 'react-dom/server';
import { fromByteArray } from 'base64-js';
import './index.scss';

interface SvgIconProps {
  svgName: string; // svg名字
  svgStyle?: Recordable; // 自定义样式
  svgClass?: string; // 自定义类名
  svgColor?: string; // 填充颜色
}
const SvgIcon: FC<SvgIconProps> = (props) => {
  const { svgName, svgStyle, svgClass, svgColor } = props;
  const svg = (
    <svg aria-hidden='true' className={`svg-icon ${svgClass || ''}`} style={svgStyle}>
      <use xlinkHref={'#icon-' + svgName} fill={svgColor} />
    </svg>
  );
  
  // const svgXml = renderToStaticMarkup(svg); // 将 JSX 转换为字符串
  // const svgBase64 = `data:image/svg+xml;base64,${fromByteArray(new TextEncoder().encode(svgXml))}`;
  console.log(123, renderToStaticMarkup(svg));
  
  return svg;
};

export default SvgIcon

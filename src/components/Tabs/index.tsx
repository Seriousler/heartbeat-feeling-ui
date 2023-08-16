import React, {FC, useState} from 'react';
import {AtTabs, AtTabsPane} from 'taro-ui';
// import {View} from "@tarojs/components";
import './index.scss';

// interface TabsProps {
//   [key: string]: any
// }
const Tabs: FC<Recordable> = (props) => {
  const { tabs }: {title: string, content: React.ReactNode} = props
  const [current, setCurrent] = useState(0)
  const clickHandle = (index: number) => {
    // console.log('e========>', index, pagePath[index]);
    // // console.log(123, pagePath[index])
    // Taro.switchTab({
    //   url: pagePath[index]
    // })
    setCurrent(index)
  }
  // console.log(222, tabs)
  return <AtTabs className='index-tabs' current={current} tabList={tabs} onClick={clickHandle}>
    {tabs.map((tab, index) => (
      <AtTabsPane current={index} index={index}>
        {tab.content}
      </AtTabsPane>
    ))}
  </AtTabs>

}

export default Tabs

import {Fragment, PropsWithChildren} from "react";
import {View} from "@tarojs/components";
import Taro from "@tarojs/taro";
import './index.scss'

export default function LayoutView(props) {
  const { children }: PropsWithChildren<Recordable> = props
  return (
    <View id='hf' style={{paddingTop: Taro.getSystemInfoSync().statusBarHeight + 'px'}}>
      <Fragment>{children}</Fragment>
    </View>
  )
}

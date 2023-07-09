import {Fragment, PropsWithChildren} from "react";
import {View} from "@tarojs/components";
// import Taro from "@tarojs/taro";
import { useNavInfo } from "@/hooks";
import './index.scss'

export default function LayoutView(props) {
  const { children }: PropsWithChildren<Recordable> = props
  const {appHeaderHeight} = useNavInfo()
  return (
    <View id='hf' style={{paddingTop: appHeaderHeight + 'px'}}>
      <Fragment>{children}</Fragment>
    </View>
  )
}

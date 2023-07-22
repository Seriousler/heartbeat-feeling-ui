import { View } from '@tarojs/components'
import { AtActivityIndicator } from 'taro-ui'
import {FC, useEffect, PropsWithChildren, useState} from "react";
import {usePullDownRefresh, useReachBottom} from "@tarojs/taro";
import './index.scss'
// import {useNavInfo} from "@/hooks";


// interface NavBarProps {
//   [key: string]: any
// }

// const ScrollingLoading: FC = (props) => {
//   const { children }: PropsWithChildren<Recordable> = props
//   useEffect(() => {
//   })
//   usePullDownRefresh(() => {
//     console.log('onPullDownRefresh')
//   })
//   useReachBottom(() => {
//     console.log('onReachBottom')
//   })
//   return (
//     <View>
//       <AtActivityIndicator />
//       {children}
//       <AtActivityIndicator />
//     </View>
//   )
// }

// export default ScrollingLoading

const ScrollingLoading = (): FC => {
  const [dargStyle, setDargStyle] = useState({top: 0}) // 下拉框的样式
  const [downDragStyle, setDownDragStyle] = useState({height: 0}) //下拉图标的样式
  const [downText] = useState('下拉刷新') //下拉图标的样式
  const [upDragStyle, setUpDragStyle] = useState({height: 0}) //上拉图标样式
  const [pullText] = useState('上拉加载更多') //下拉图标的样式
  const [start_p] = useState({})
  const [scrollY, setScrollY] = useState(true)
  const [dargState, setDargState] = useState(0)

  const reduction = () => {//还原初始设置
    const time = 0.5;
    setUpDragStyle({
      height: 0 + 'px',
      transition: `all ${time}s`
    })
    setDargState(0)
    setDargStyle({
      top: 0 + 'px',
      transition: `all ${time}s`
    })
    setDownDragStyle({
      height: 0 + 'px',
      transition: `all ${time}s`
    })
    setScrollY(true)
    setTimeout(() => {
      this.setState({
        dargStyle: {
          top: 0 + 'px',
        },
        upDragStyle: {//上拉图标样式
          height: 0 + 'px'
        },
        pullText: '上拉加载更多',
        downText: '下拉刷新'
      })
    }, time * 1000);
  }
  touchStart(e) {
    this.setState({
      start_p: e.touches[0]
    })
  }
  touchmove(e) {
    let that = this
    let move_p = e.touches[0],//移动时的位置
      deviationX = 0.30,//左右偏移量(超过这个偏移量不执行下拉操作)
      deviationY = 70,//拉动长度（低于这个值的时候不执行）
      maxY = 100;//拉动的最大高度

    let start_x = this.state.start_p.clientX,
      start_y = this.state.start_p.clientY,
      move_x = move_p.clientX,
      move_y = move_p.clientY;


    //得到偏移数值
    let dev = Math.abs(move_x - start_x) / Math.abs(move_y - start_y);
    if (dev < deviationX) {//当偏移数值大于设置的偏移数值时则不执行操作
      let pY = Math.abs(move_y - start_y) / 3.5;//拖动倍率（使拖动的时候有粘滞的感觉--试了很多次 这个倍率刚好）
      if (move_y - start_y > 0) {//下拉操作
        if (pY >= deviationY) {
          this.setState({ dargState: 1, downText: '释放刷新' })
        } else {
          this.setState({ dargState: 0, downText: '下拉刷新' })
        }
        if (pY >= maxY) {
          pY = maxY
        }
        this.setState({
          dargStyle: {
            top: pY + 'px',
          },
          downDragStyle: {
            height: pY + 'px'
          },
          scrollY:false//拖动的时候禁用
        })
      }
      if (start_y - move_y > 0) {//上拉操作
        console.log('上拉操作')
        if (pY >= deviationY) {
          this.setState({ dargState: -1, pullText: '释放加载更多' })
        } else {
          this.setState({ dargState: 0, pullText: '上拉加载更多' })
        }
        if (pY >= maxY) {
          pY = maxY
        }
        this.setState({
          dargStyle: {
            top: -pY + 'px',
          },
          upDragStyle: {
            height: pY + 'px'
          },
          scrollY: false//拖动的时候禁用
        })
      }

    }
  }
  pull() {//上拉
    console.log('上拉')
    // this.props.onPull()
  }
  down() {//下拉
    console.log('下拉')
    // this.props.onDown()
  }
  ScrollToUpper() { //滚动到顶部事件
    console.log('滚动到顶部事件')
    // this.props.Upper()
  }
  ScrollToLower() { //滚动到底部事件
    console.log('滚动到底部事件')
    // this.props.Lower()
  }
  touchEnd(e) {
    if (this.state.dargState === 1) {
      this.down()
    } else if (this.state.dargState === -1) {
      this.pull()
    }
    this.reduction()
  }
  return (
    <View>
      <View style='width:100%;height:20vh;background:#993;' >aaaaaaaa</View>
      <View className='dragUpdataPage'>
        <View className='downDragBox' style={downDragStyle}>
          <AtActivityIndicator></AtActivityIndicator>
          <Text className='downText'>{this.state.downText}</Text>
        </View>
        <ScrollView
          style={dargStyle}
          onTouchMove={this.touchmove}
          onTouchEnd={this.touchEnd}
          onTouchStart={this.touchStart}
          onScrollToUpper={this.ScrollToUpper}
          onScrollToLower={this.ScrollToLower}
          className='dragUpdata'
          scrollY={this.state.scrollY}
          scrollWithAnimation>
          <View style='width:100%;height:60vh;background:pink;' >aaaaaaaa</View>
        </ScrollView>
        <View className='upDragBox' style={upDragStyle}>
          <AtActivityIndicator></AtActivityIndicator>
          <Text className='downText'>{this.state.pullText}</Text>
        </View>
      </View>
    </View>
  )
}
export default ScrollingLoading

// export default class ScrollingLoading {
//   constructor(props) {
//     super(props)
//     this.state = {
//       dargStyle: {//下拉框的样式
//         top: 0 + 'px'
//       },
//       downDragStyle: {//下拉图标的样式
//         height: 0 + 'px'
//       },
//       downText: '下拉刷新',
//       upDragStyle: {//上拉图标样式
//         height: 0 + 'px'
//       },
//       pullText: '上拉加载更多',
//       start_p: {},
//       scrollY:true,
//       dargState: 0//刷新状态 0不做操作 1刷新 -1加载更多
//     }
//   }
//   reduction() {//还原初始设置
//     const time = 0.5;
//     this.setState({
//       upDragStyle: {//上拉图标样式
//         height: 0 + 'px',
//         transition: `all ${time}s`
//       },
//       dargState: 0,
//       dargStyle: {
//         top: 0 + 'px',
//         transition: `all ${time}s`
//       },
//       downDragStyle: {
//         height: 0 + 'px',
//         transition: `all ${time}s`
//       },
//       scrollY:true
//     })
//     setTimeout(() => {
//       this.setState({
//         dargStyle: {
//           top: 0 + 'px',
//         },
//         upDragStyle: {//上拉图标样式
//           height: 0 + 'px'
//         },
//         pullText: '上拉加载更多',
//         downText: '下拉刷新'
//       })
//     }, time * 1000);
//   }
//   touchStart(e) {
//     this.setState({
//       start_p: e.touches[0]
//     })
//   }
//   touchmove(e) {
//     let that = this
//     let move_p = e.touches[0],//移动时的位置
//       deviationX = 0.30,//左右偏移量(超过这个偏移量不执行下拉操作)
//       deviationY = 70,//拉动长度（低于这个值的时候不执行）
//       maxY = 100;//拉动的最大高度

//     let start_x = this.state.start_p.clientX,
//       start_y = this.state.start_p.clientY,
//       move_x = move_p.clientX,
//       move_y = move_p.clientY;


//     //得到偏移数值
//     let dev = Math.abs(move_x - start_x) / Math.abs(move_y - start_y);
//     if (dev < deviationX) {//当偏移数值大于设置的偏移数值时则不执行操作
//       let pY = Math.abs(move_y - start_y) / 3.5;//拖动倍率（使拖动的时候有粘滞的感觉--试了很多次 这个倍率刚好）
//       if (move_y - start_y > 0) {//下拉操作
//         if (pY >= deviationY) {
//           this.setState({ dargState: 1, downText: '释放刷新' })
//         } else {
//           this.setState({ dargState: 0, downText: '下拉刷新' })
//         }
//         if (pY >= maxY) {
//           pY = maxY
//         }
//         this.setState({
//           dargStyle: {
//             top: pY + 'px',
//           },
//           downDragStyle: {
//             height: pY + 'px'
//           },
//           scrollY:false//拖动的时候禁用
//         })
//       }
//       if (start_y - move_y > 0) {//上拉操作
//         console.log('上拉操作')
//         if (pY >= deviationY) {
//           this.setState({ dargState: -1, pullText: '释放加载更多' })
//         } else {
//           this.setState({ dargState: 0, pullText: '上拉加载更多' })
//         }
//         if (pY >= maxY) {
//           pY = maxY
//         }
//         this.setState({
//           dargStyle: {
//             top: -pY + 'px',
//           },
//           upDragStyle: {
//             height: pY + 'px'
//           },
//           scrollY: false//拖动的时候禁用
//         })
//       }

//     }
//   }
//   pull() {//上拉
//     console.log('上拉')
//     // this.props.onPull()
//   }
//   down() {//下拉
//     console.log('下拉')
//     // this.props.onDown()
//   }
//   ScrollToUpper() { //滚动到顶部事件
//     console.log('滚动到顶部事件')
//     // this.props.Upper()
//   }
//   ScrollToLower() { //滚动到底部事件
//     console.log('滚动到底部事件')
//     // this.props.Lower()
//   }
//   touchEnd(e) {
//     if (this.state.dargState === 1) {
//       this.down()
//     } else if (this.state.dargState === -1) {
//       this.pull()
//     }
//     this.reduction()
//   }
//   render () {
//     let dargStyle = this.state.dargStyle;
//     let downDragStyle = this.state.downDragStyle;
//     let upDragStyle = this.state.upDragStyle;
//     return (
//       <View>
//         <View style='width:100%;height:20vh;background:#993;' >aaaaaaaa</View>
//         <View className='dragUpdataPage'>
//           <View className='downDragBox' style={downDragStyle}>
//             <AtActivityIndicator></AtActivityIndicator>
//             <Text className='downText'>{this.state.downText}</Text>
//           </View>
//           <ScrollView
//             style={dargStyle}
//             onTouchMove={this.touchmove}
//             onTouchEnd={this.touchEnd}
//             onTouchStart={this.touchStart}
//             onScrollToUpper={this.ScrollToUpper}
//             onScrollToLower={this.ScrollToLower}
//             className='dragUpdata'
//             scrollY={this.state.scrollY}
//             scrollWithAnimation>
//             <View style='width:100%;height:60vh;background:pink;' >aaaaaaaa</View>
//           </ScrollView>
//           <View className='upDragBox' style={upDragStyle}>
//             <AtActivityIndicator></AtActivityIndicator>
//             <Text className='downText'>{this.state.pullText}</Text>
//           </View>
//         </View>
//       </View>
//     )
//   }
// }
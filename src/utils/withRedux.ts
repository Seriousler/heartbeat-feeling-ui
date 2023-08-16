import { connect } from 'react-redux';

// 封装 connect 函数
export const withRedux = (mapStateToProps, mapDispatchToProps) => {
  return (Component) => connect(mapStateToProps, mapDispatchToProps)(Component)
}


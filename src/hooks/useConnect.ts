import { useSelector, useDispatch } from 'react-redux';

export default function useConnect(mapStateToProps, actions) {
  const dispatch = useDispatch();
  const stateProps = useSelector(mapStateToProps);

  const actionProps = {};
  for (const key in actions) {
    actionProps[key] = (...args) => dispatch(actions[key](...args));
  }

  return { ...stateProps, ...actionProps };
}

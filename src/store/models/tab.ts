import type { Model } from '@/store/types'

const tab: Model<any> = {
  namespace: 'tab',
  state: {
    current: 0
  },
  reducers: {
    setCurrent(state, { payload }) {
      return { ...state, current: payload };
    },
  }
};

export default tab

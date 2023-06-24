import type { Model } from '@/store';
import type { IndexModelState } from './types'

export const indexModel: Model<IndexModelState> = {
  namespace: 'index',
  state: {
    status: false,
    msg: 'index'
  },
  effects: {
    *pageInit({ },) {
      console.info('init test')
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    }
  }
};
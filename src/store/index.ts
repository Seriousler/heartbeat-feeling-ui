// import accountModel from './accountModel';
// import {indexModel} from "@/pages/index/model";
import {dva} from '@/utils';
import common from './models/common';
import tab from './models/tab';

const store = dva.createApp({
  initialState: {},
  models: [common, tab]
}).getStore()

export default store
export * from './types'

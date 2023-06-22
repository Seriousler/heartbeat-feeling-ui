'use strict';
module.exports = {
  types: [
    {value: 'feat', name: '特性: 新的特性'},
    {value: 'fix', name: '修复: 修复问题'},
    {value: 'docs', name: '文档: 文档变更'},
    {value: 'style', name: '格式: 格式修复'},
    {value: 'refactor', name: '重构: 代码重构'},
    {value: 'perf', name: '性能: 提升性能'},
    {value: 'test', name: '测试: 添加测试'},
    {value: 'chore', name: '工具: 开发工具变动(构建、脚手架工具等)'},
    {value: 'revert', name: '回滚: 代码回退'},
    {value: 'WIP', name: '在制品: 进行中的工作'}
  ],
  scopes: [
    {name: '全局'},
    {name: '容器'},
    {name: '页面'},
    {name: '组件'}
  ],
  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个范围 (可选):',
    // used if allowCustomScopes is true
    customScope: '更改的范围:',
    subject: '短说明:\n',
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?'
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // 限制长度
  subjectLimit: 100
}
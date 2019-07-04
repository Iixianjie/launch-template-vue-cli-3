module.exports = {
  presets: [
    /** 
     * 关闭自动polyfill检测改为手动引入防止边角情况
     * @vue/babel-preset-app包含以下可用的提案语法：
     * Dynamic Import Syntax
     * Proposal Class Properties
     * Proposal Decorators (legacy)
      */
    ['@vue/app', { useBuiltIns: false }]
  ]
};

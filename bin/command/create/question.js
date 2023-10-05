const inquirer = require('inquirer')

let getAnswer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'projectNm',
      message: '项目名称',
      default: 'project'
    },
    {
      type: 'list',
      name: 'type',
      message: '项目类型',
      default: 'vue',
      choices: [
        { name: 'sdk', value: 'sdk' },
        {
          name: 'vue',
          value: 'vue'
        },
        {
          name: 'node',
          value: 'node'
        }
      ]
    },
    {
      when: data => {
        if (data.type === 'vue') {
          return true
        }
      },
      type: 'list',
      name: 'build',
      message: '项目类型',
      default: 'webpack',
      choices: [
        { name: 'webpack', value: 'webpack' },
        { name: 'vite', value: 'webpack' }
      ]
    },
    {
      when: data => data.type === 'node',
      type: 'list',
      name: 'build',
      message: '项目类型',
      default: 'koa',
      choices: [
        { name: 'koa', value: 'koa' },
        { name: 'express', value: 'express' }
      ]
    },
    {
      type: 'list',
      name: 'language',
      message: '项目语言',
      default: 'JavaScript',
      choices: [
        { name: 'JavaScript', value: 'JavaScript' },
        { name: 'TypeScript', value: 'TypeScript' }
      ]
    },
    {
      type: 'checkbox',
      name: 'funcs',
      message: '代码风格',
      choices: [
        { name: 'esLint', value: 'esLint' },
        { name: 'gitHusky', value: 'gitHusky' },
        // { name: 'prettier', value: 'prettier' }
      ]
    },
    {
      when: data => data.language === 'TypeScript',
      type: 'checkbox',
      name: 'helpFun',
      message: '辅助功能',
      choices: [
        { name: 'alias', value: 'alias' },
        {
          name: 'dts', value: 'dts',
        },
        {
          name: 'tsDoc', value: 'tsDoc',
        },
        { name: 'vitepress', value: 'vitepress' },
        { name: 'Jest', value: 'Jest' },

      ]
    },
    {
      when: data => data.language !== 'TypeScript',
      type: 'checkbox',
      name: 'helpFun',
      message: '辅助功能',
      choices: [
        { name: 'alias', value: 'alias' },
        { name: 'vitepress', value: 'vitepress' },
        { name: 'Jest', value: 'Jest' },
      ]
    },
    {
      type: 'checkbox',
      name: 'addition',
      message: '附加功能',
      choices: [
        { name: 'babel', value: 'babel' },
        { name: 'terser', value: 'terser' },
      ]
    }
  ])
}

module.exports = {
  getAnswer
}

#!/usr/bin/env node
const { program } = require('commander');
const inquirer = require('inquirer');

/**
 * 选项options
 * 处理--version
 */

const version = require('../package.json').version
program.version(`Edar-cli v${version}`, '-v, --version')

program
  .command('create')
  .description('create a project into a folder')
  .action(async function (project) {
    let data = await inquirer.prompt([
      {
        type: 'input',
        name: 'project',
        message: '项目名称',
        default: 'copyLeft',
      },
      {
        type: 'list',
        name: 'type',
        message: '项目类型',
        default: 'vue',
        choices: [
          { name: 'sdk', value: 'sdk' },
          {
            name: 'vue', value: 'vue'
          },
        ]
      }
    ])
    if (data.type === 'vue') {
      let buildName = await inquirer.prompt([
        {
          type: 'list',
          name: 'build',
          message: '项目类型',
          default: 'webpack',
          choices: [
            { name: 'webpack', value: 'webpack' },
            { name: 'vite', value: 'webpack' },

          ]
        }
      ])
      // console.log(buildName);
    }

    let list =await inquirer.prompt({
        type: 'checkbox',
        name:'addition',
        choices:[
          {name:'esLint',value:'esLint'},
          {name:'gitHusky',value:'gitHusky'},
          {name:'postCss',value:'postCss'},
          {name:'babel',value:'babel'},
          {name:'axios',value:'axios'},
          {name:'ts',value:'ts'},
          {name:'prettier',value:'prettier'},
        ]
    })
  })


// 这个一定要放在最后一行
program.parse(program.argv)



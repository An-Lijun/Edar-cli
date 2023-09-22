const { program } = require('commander');
const { inquirer } = require('inquirer');

//创建项目
program
  .command('create <project> [...others]')
  .description('create a project into a folder')
  .action(async function (project) {
    const answers = await inquirer.prompt([
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
          { name: 'vue', value: 'vue' },
          { name: 'react', value: 'react' },
          { name: 'jq', value: 'jq' },
        ]
      }
    ])
    console.log(answers);
  })

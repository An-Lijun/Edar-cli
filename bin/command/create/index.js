const { program } = require('commander')
const { getAnswer } = require('./question')
const createSkd = require('./createSdk')
//创建项目
program
  .command('create')
  .description('create a project into a folder')
  .action(async function () {
    let data = await getAnswer()
    // console.log(data);
    // 创建package.json
    switch (data.type) {
      case 'sdk':
        createSkd(data)
        break; 
    }
  })

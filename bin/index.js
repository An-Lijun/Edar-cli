#!/usr/bin/env node
const { program } = require('commander');

/**
 * 选项options
 * 处理--version
 */
const version = require('../package.json').version
program.version(`Edar-cli v${version}`, '-v, --version')

// 注册命令
require('./command/index.js')


// 这个一定要放在最后一行
program.parse(program.argv)



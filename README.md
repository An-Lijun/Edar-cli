# Edar-cli

## 一个快速搭建web项目和规范的脚手架


命令解析 commander 包

模板拼接 Ejs包

问答命令 inquirer包 注意 这里必须8.2.5 否则 就得使用ESM了(为了风格统一)
---
## TypeScript 
  TypeScript 可以帮助我们更好的判断数据类型,并且在编译过程中排除很多低级的类型错误.
## Alias
  路径别名alias 可以帮助我们更好的找到文件@=>src
## eslint
  文件类型和风格规范
  使用方式 在 设置搜索 eslint 然后 在配置json 中添加以下配置,就可以在保存时候自动eslint fix
    //配置eslint
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    "vue"
  ],
  // "eslint.run": "onSave",
  "editor.codeActionsOnSave": {
    "source.fixAll": true // 保存时使用eslint校验文件
  }
## 类型文件打包
  在一些类库中可以使用,可以帮助使用者更好的提示
## prettier
  多人协同开发时候格式化风格的统一(已移除,采用 eslint进行格式化)
  .prettierrc.ks 
  // 因为prettier.json 不能写注释所以我这里用 .js文件
module.exports = {
  printWidth: 100, //单行长度
  tabWidth: 2, //缩进长度
  useTabs: false, //使用空格代替tab缩进
  semi: true, //句末使用分号
  singleQuote: true, //使用单引号
  bracketSpacing: true, //在对象前后添加空格-eg: { foo: bar }
  arrowParens: 'avoid', //单参数箭头函数参数周围使用圆括号-eg: (x) => x
  quoteProps: 'as-needed',//只在必须给对象属性加引号
  eslintIntegration:true
  // 缺一个对标 对象 换行的
};
// 对象格式化

## gitignore
  git的忽略文件
## TsDoc
  注意 这里会根据.types.ts 生成,所以要先build主代码在进行 npm run doc
  这里使用TSDoc规范 生成文档然后生成md 官网https://tsdoc.org/

## AI注释 Mintlify Doc
 vscode  安装 MINTLIFY 插件

## vitepress
  文档 手动文档

  全自动生成
  会根据 npm run doc  生成出来的doc文件生成vitepress
  npm run docs:dev", 开发doc
  npm run docs:build": 打包doc
  npm run docs:preview": 查看打包后的doc

## Jest 
ts-jest 官网: https://kulshekhar.github.io/ts-jest/docs/getting-started/installation/#jest-config-file
自动生成

## gitcommit
配置了ESlint 后 会有一个命令 叫 npm run lint 会自动检测 配置的文件是否以eslint规定的格式书写,如果不是那么会自动修复,
为了防止有人没有格式化代码直接提交,这里的办法是 在git commit的时候 将代码自动校验并修复格式化规范
 husky commitLint
 打算这里区分soft hard soft 可以git commit  hard 不可以

## babel
babel 代码转换 在ts打包之后执行

## terser
代码压缩 ,在babel 转换之后执行

## treeShaking
不要使用export default，默认导出会失去摇树优化。
不要使用export function的写法，而应该将每一个函数归集到一个统一的导出中，便于查看和维护。

etc
------
 Netlify
# 其他


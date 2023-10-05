const path = require('path')
const ejs = require('ejs')

function compileEjs(templateNm, props = {}) {
  return new Promise((resolve, reject) => {
    const tempPath = `../template/sdk/${templateNm}`
    const absolutePath = path.resolve(__dirname, tempPath)
    ejs.renderFile(absolutePath, {props}, (err, result) => {
      if (err) {
        console.log(err, `编译模板-${templateNm}-失败`);
        return reject(err)
      }
      resolve(result)
    })
  })
}
module.exports = {
  compileEjs
}
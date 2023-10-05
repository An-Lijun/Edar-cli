const beautify = require('beautify')
const { compileEjs } = require('../../utils/compile-ejs')
const writeFile = require('../../utils/write-file')
async function createSdk(data){
    let packageTmp = await compileEjs('package.json.ejs', data)
    writeFile('./package.json',beautify(packageTmp,{format:'json'}))
    
    // console.log(render(package,{}));
    // ejs.renderFile('./',package)
    // {
    //   projectNm: 'aa',
    //   type: 'sdk',
    //   language: 'TypeScript',
    //   funcs: [ 'esLint', 'gitHusky', 'prettier' ],
    //   helpFun: [ 'alias', 'dts', 'tsDoc', 'vitepress', 'Jest' ],
    //   addition: [ 'babel', 'terser' ]
    // }
}
module.exports = createSdk
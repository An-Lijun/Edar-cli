const beautify = require('beautify')
const { compileEjs } = require('../../utils/compile-ejs')
const writeFile = require('../../utils/write-file')
async function createSdk(data){
    
    // 创建package.json
    // let packageTmp = await compileEjs('package.json.ejs', data)
    // writeFile('./package.json',beautify(packageTmp,{format:'json'}))
    
    // 创建README
    // writeFile('./README.md',`# ${data.projectNm}`)

    //创建Rollup.config.js
    // let rollupTmp = await compileEjs('rollup.config.js.ejs', data)
    // writeFile('./rollup.config.js',beautify(rollupTmp,{format:'js'}))

    // 创建tsconfig.json
    // let tsconfigTmp = await compileEjs('tsconfig.json.ejs', data)
    // writeFile('./tsconfig.json',beautify(tsconfigTmp,{format:'json'}))

    // 创建tsdoc-metadata
    // let tsdocTmp = await compileEjs('tsdoc-metadata.json.ejs', data)
    // writeFile('./tsdoc-metadata.json',beautify(tsdocTmp,{format:'json'}))
    
    // 创建jest.config.js
    // let jestTmp = await compileEjs('jest.config.js.ejs', data)
    // writeFile('./jest.config.js',beautify(jestTmp,{format:'js'}))

    //创建文档
    // let indexMdTmp = await compileEjs('index.ejs', data)
    // writeFile('./index.md',indexMdTmp)

    // 创建babel
    // let babelTmp = await compileEjs('babel.config.js.ejs', data)
    // writeFile('./babel.config.js',beautify(babelTmp,{format:'js'}))

    // 创建 api-extractor
    // let apiTmp = await compileEjs('api-extractor.json.ejs', data)
    // writeFile('./api-extractor.json',beautify(apiTmp,{format:'json'}))


    //创建 gitignore
    // let gitignoreTmp = await compileEjs('.gitignore.ejs', data)
    // writeFile('./.gitignore',gitignoreTmp)


    //创建eslintrc.js
    // let eslintrcTmp = await compileEjs('.eslintrc.js.ejs', data)
    // writeFile('./.eslintrc',beautify(eslintrcTmp,{format:'js'}))
    

    // 创建eslintignore
    // let eslintrcTmp = await compileEjs('.eslintignore.ejs', data)
    // writeFile('./.eslintignore',beautify(eslintrcTmp,{format:'js'}))




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
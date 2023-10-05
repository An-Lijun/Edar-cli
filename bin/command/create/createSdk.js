const beautify = require('beautify')
const { compileEjs } = require('../../utils/compile-ejs')
const writeFile = require('../../utils/write-file')
const fs = require('fs');
const ora = require('ora')
const loading = ora('正在初始化...')

async function createSdk(data){
    loading.start()
    // 创建package.json
    let packageTmp = await compileEjs('package.json.ejs', data)
    writeFile('./package.json',beautify(packageTmp,{format:'json'}))
    
    // 创建README
    writeFile('./README.md',`# ${data.projectNm}`)

    //创建Rollup.config.js
    let rollupTmp = await compileEjs('rollup.config.js.ejs', data)
    writeFile('./rollup.config.js',beautify(rollupTmp,{format:'js'}))

    // 创建tsconfig.json
    if(data.language==='TypeScript'){
        let tsconfigTmp = await compileEjs('tsconfig.json.ejs', data)
        writeFile('./tsconfig.json',beautify(tsconfigTmp,{format:'json'}))
    }

    // 创建tsdoc-metadata
    if(data.helpFun.includes('dts')){
        let tsdocTmp = await compileEjs('tsdoc-metadata.json.ejs', data)
        writeFile('./tsdoc-metadata.json',beautify(tsdocTmp,{format:'json'}))
    }
    // 创建jest.config.js
    if(data.helpFun.includes('Jest')){
        let jestTmp = await compileEjs('jest.config.js.ejs', data)
        writeFile('./jest.config.js',beautify(jestTmp,{format:'js'}))
    }

    //创建文档
    if(data.helpFun.includes('tsDoc')){
        let indexMdTmp = await compileEjs('index.ejs', data)
        writeFile('./index.md',indexMdTmp)
    }


    // 创建 api-extractor
    if(data.helpFun.includes('tsDoc')){
        let apiTmp = await compileEjs('api-extractor.json.ejs', data)
        writeFile('./api-extractor.json',beautify(apiTmp,{format:'json'}))
    }


    //创建 gitignore
    let gitignoreTmp = await compileEjs('.gitignore.ejs', data)
    writeFile('./.gitignore',gitignoreTmp)


    //创建eslintrc.js
    if(data.funcs.includes('esLint')){
        let eslintrcTmp = await compileEjs('.eslintrc.js.ejs', data)
        writeFile('./.eslintrc.js',beautify(eslintrcTmp,{format:'js'}))
    }

    // 创建eslintignore
    if(data.funcs.includes('esLint')){
        let eslintrcTmp = await compileEjs('.eslintignore.ejs', data)
        writeFile('./.eslintignore',eslintrcTmp)
    }

    // 创建文件夹etc
    if(data.helpFun.includes('tsDoc')){
        fs.mkdirSync('./etc')
    }


    // 创建vitepress
    if(data.helpFun.includes('vitepress')){
        let vitepressTmp = await compileEjs('.vitepressconfig.ejs', data)
        fs.mkdirSync('./.vitepress')
        writeFile('./.vitepress/config.mts',vitepressTmp)
    }

    //创建husky
    if(data.funcs.includes('gitHusky')){
        fs.mkdirSync('./.husky')
        let commitTmp = await compileEjs('commit.ejs', data)
        writeFile('./.husky/pre-commit',commitTmp)
        fs.mkdirSync('./.husky/_')
        let _gitignoreTmp = await compileEjs('_gitignoreTmp.ejs', data)
        writeFile('./.husky/_/.gitignore',_gitignoreTmp)
    }
    fs.mkdirSync('./src')
    loading.succeed('初始化成功')
    console.log('please run npm i !');
}
module.exports = createSdk
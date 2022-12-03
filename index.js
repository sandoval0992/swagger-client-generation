const yaml = require('js-yaml')
const CodeGen = require('swagger-js-codegen').CodeGen;
const fs = require('fs')

try {
const specsFile = yaml.load(fs.readFileSync('./swagger/discover-client.yaml', 'utf-8'));

const mustacheCtx = {
    mgCoreImportPrefix : 'mg-core',
    basePath: true,
    hasBasePath: false,
    swaggerSpecs: JSON.stringify(specsFile),
    version: specsFile.info.version,
    // preRequestCallBackNames
};

const source = CodeGen.getCustomCode({
    moduleName: 'DiscoverClient',
    className: 'DiscoverClient',
    swagger: specsFile,
    template: {
        class: fs.readFileSync("templates/node-class.mustache", "utf-8"),
        method: fs.readFileSync("templates/method.mustache", "utf-8")
    },
    mustache: mustacheCtx
});

fs.writeFileSync('./discover/client/DiscoverClient.js', source, {
    encoding: "utf8"
});

// console.log(JSON.stringify(specsFile));
} catch (error) {
    console.log(error)
}

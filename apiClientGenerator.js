const yaml = require('js-yaml');
const CodeGen = require('swagger-js-codegen').CodeGen;
const fs = require('fs');

console.log('Starting client generation...');

const args = process.argv.slice(2);
const swaggerSpecsPath = args[0].split('=')[1];
const outputFilePath = args[1].split('=')[1];

try {
  const specsFile = yaml.load(fs.readFileSync(swaggerSpecsPath, 'utf-8'));

  const customVariables = {
    swaggerSpecs: JSON.stringify(specsFile),
    version: specsFile.info.version,
  };

  const source = CodeGen.getCustomCode({
    moduleName: 'NatoursApiClient',
    className: 'NatoursApiClient',
    swagger: specsFile,
    template: {
      class: fs.readFileSync('templates/node-class-draft.mustache', 'utf-8'),
      method: fs.readFileSync('templates/method-draft.mustache', 'utf-8'),
    },
    mustache: customVariables,
  });

  fs.writeFileSync(outputFilePath, source, {
    encoding: 'utf8',
  });

  console.log('Client generations succeeded');
} catch (error) {
  console.log(error);
}

const fs = require('fs');
const path = require('path');
const packageJson = require('./package.json');
const webPackageJson = require('../web/package.json');

const versions = {
    name: packageJson.build.productName,
    version: packageJson.version,
    description: webPackageJson.description,
    copyright: webPackageJson.copyright,
    typescript: packageJson.devDependencies.typescript.replace('^', ''),
    electron: packageJson.devDependencies.electron.replace('^', ''),
    react: webPackageJson.dependencies.react.replace('^', '')
};

fs.writeFileSync(
    path.resolve('..', 'web', 'public', 'info.json'),
    JSON.stringify(versions)
);
import pkg from './package.json' assert { type: 'json' };

const version = pkg.devDependencies.jest;
console.log(version);
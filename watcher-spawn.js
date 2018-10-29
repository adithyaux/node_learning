'use strict';
const fs = require('fs');
var spawn = require('child_process').spawn;
const filename = process.argv[2];

if(!filename){
    throw Error('a file to watch must be specified');
}
fs.watch(filename,()=> {
    const ls = spawn('ls',['-l','-h',filename]);
    ls.stdout.pipe(process.stdout);
});
console.log(`now watching ${filename} for changes`);

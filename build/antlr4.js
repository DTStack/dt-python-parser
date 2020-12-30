const path = require('path');
const exec = require('child_process').exec;

const antlr4 = path.resolve(__dirname, 'antlr4-4.7.2-complete.jar');
const grammars = path.resolve(__dirname, '../src/grammar');
const output = path.resolve(__dirname, '../src/lib');

const entry = ['python2', 'python3'];

entry.forEach(language => {
    const cmd = `
        java
        -jar ${antlr4}
        -Dlanguage=JavaScript
        -visitor
        -listener
        -o ${output}/${language}
        ${grammars}/${language}/*.g4
    `.replace(/\n/g, '');
    exec(cmd, err => {
        if (err) {
            console.error('Antlr4 build error: ' + language, err);
        } else {
            console.log(`Build ${language} success.`);
        }
    });
});

#!/usr/local/env node

var program = require('commander'),
    pomodoro = require('../');

program
    .version('0.0.1')
    .usage('[options]')
    .option('-m, --minute <Minutes>', 'Minutes per Pomodoro', 25)
    .option('-v, --voice <Voice>', 'Voice Type', 'Vicki')
    
program
    .on('--help', function() {
        console.log(' Example:');
        console.log('');
        console.log('    $ ppo -m 25 -v Vicki');
        console.log('');
    });

program.parse(process.argv);

pomodoro.start(program.minute, program.voice);

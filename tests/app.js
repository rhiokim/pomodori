var pomodori = require('../');

pomodori.start(0.1);

setTimeout(function(){
    pomodori.interupt();
}, 2100);

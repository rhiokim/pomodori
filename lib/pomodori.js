var say = require('./say');
var timer = require('./timer');
var sound = require('./sound');
var interupt = require('./interuptor');

timer.on('tick', function(res) {
    sound.tick();
});

timer.on('timeover', function() {
    sound.stop();
    setTimeout(function(){
        say.speak('Good job! Friend');
    }, 2000);
});

interupt.on('timeover', function() {
    say.speak('Oops! Broken your Pomodoro');
    timer.stop();
    reset();
});

function reset() {
    timer.reset();
    interupt.reset();
}

exports.start = function(min, voice) {
    say.speak('start');
    
    timer.setMinute(min || 25);

    setTimeout(function(){
        sound.tick();
        timer.start();
    }, 1000);

};

exports.interupt = function() {
    timer.pause();
    interupt.start();
};

exports.resume = function() {
    timer.resume();
    interupt.pause();
};

exports.stop = function() {};


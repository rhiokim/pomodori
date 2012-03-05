var say = require('./say');
var timer = require('./timer');
var sound = require('./sound');

exports.start = function(min) {
    say.speak('start');

    timer.on('sec', function(res) {});
    timer.on('timeover', function() {
        sound.stop();
    });

    timer.setMinute(min || 25);
    timer.start();
    sound.start();
};

exports.pause = function() {
};

exports.resume = function() {};

exports.stop = function() {};


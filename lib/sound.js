var spawn = require('child_process').spawn,
    exec = require('child_process').exec;

function PomodoroSound() {
    var commands = [];

    function _setFile(name) {
        commands[1] = name;
    }

    function _exitHandler(code, signal) {
        //console.log(code, signal);
    }

    function _play(file, vol) {
        vol = vol || 1;
        cp = spawn('afplay', [ __dirname +'/mp3/'+ file +'.mp3', '-v', vol ]);
    }

    return {
        start: function() {
            _play('25', 1.5);
        },
        stop: function() {
            cp.kill();
            _play('stop', .3);
        }
    };
}

module.exports = new PomodoroSound();

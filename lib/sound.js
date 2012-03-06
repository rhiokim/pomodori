var spawn = require('child_process').spawn,
    exec = require('child_process').exec,
    path = require('path');

function PomodoroSound() {
    var commands = [];

    function _setFile(name) {
        commands[1] = name;
    }

    function _exitHandler(code, signal) {
        //console.log(code, signal);
    }

    function _play(file, vol) {
        var file, type = 'wav', vol = vol || 1;

        file = path.join(__dirname, type, file) +'.'+ type;
        cp = spawn('afplay', [ file , '-v', vol ]);
    }

    return {
        start: function() {
            _play('tick', 1.5);
        },
        stop: function() {
            cp.kill();
            _play('end', .3);
        },
        tick: function() {
            _play('tick', 1);
        }
    };
}

module.exports = new PomodoroSound();

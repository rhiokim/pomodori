var spawn = require('child_process').spawn,
    exec = require('child_process').exec;

function Say() {
    var commands = ['-v', 'Vicki', ''];

    function _setVoice(name) {
        commands[1] = name;
    }

    function _setMessage(msg) {
        commands[2] = msg;
    }

    function _exitHandler(code, signal) {
        //console.log(code, signal);
    }

    return {
        setVoice: _setVoice,
        speak: function(msg) {
            _setMessage(msg);

            cp = spawn('say', commands);
            cp.on('exit', _exitHandler);
        }
    };
}

module.exports = new Say();

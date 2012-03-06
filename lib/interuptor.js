var events = require('events'),
    util = require('util');

function Interuptor() {
    this.tid;
    this.MaxInteruptSec = 300;
    this.totalInteruptSec = 0;

    events.EventEmitter.call(this);
}

util.inherits(Interuptor, events.EventEmitter);

Interuptor.prototype.start = function() {
    var me = this;

    this.tid = setInterval(function() {
        ++me.totalInteruptSec;
       
        if (me.totalInteruptSec >= me.MaxInteruptSec) {
            me.emit('timeover');
            me.stop();
        }

    }, 1000);
};
Interuptor.prototype.pause = function() {};
Interuptor.prototype.resume = function() {};
Interuptor.prototype.reset = function() {
    this.totalInteruptSec = 0;
};
Interuptor.prototype.stop = function() {
    clearInterval(this.tid);
};

module.exports = new Interuptor();

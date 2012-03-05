var util = require('util'),
    events = require('events');

function Timer() {
    this.tid;
    this.sec = 0;
    this.minute = 25;
    this.startTime;
    this.endTime;
    this.nowTime;

    events.EventEmitter.call(this);
}

util.inherits(Timer, events.EventEmitter);

Timer.prototype.start = function() {
    var me = this;

    this.startTime = new Date().getTime();
    this.endTime = this.startTime + this.minute*60*1000;

    this.tid = setInterval(function() {
        ++me.sec;
        me.emit('sec', [me.sec]);

        if (me.endTime <= me.startTime + me.sec*1000) {
            me.stop();
        }
    }, 1000);
};        

Timer.prototype.stop = function() {
    clearInterval(this.tid);
    this.emit('timeover');
}

Timer.prototype.setMinute = function(minute) {
    this.minute = minute || 25;
}

module.exports = new Timer();


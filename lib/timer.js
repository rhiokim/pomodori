var util = require('util'),
    events = require('events');

function Timer() {
    this.tid;
    this.sec = 0;
    this.minute = 25;
    this.startTime;
    this.endTime;
    this.nowTime;
    this.interuptMaxTime = 5;

    events.EventEmitter.call(this);
}

util.inherits(Timer, events.EventEmitter);

function start() {
}

function stop() {
    clearInterval(tid);
}

Timer.prototype.start = function() {
    this.startTime = new Date().getTime();
    this.endTime = this.startTime + ( this.minute * 60 * 1000 );
    
    this.resume();
};        

Timer.prototype.stop = function() {
    clearInterval(this.tid);
    this.emit('timeover');
};

Timer.prototype.setMinute = function(min) {
    this.minute = min || 25;
};

Timer.prototype.pause = function(min) {
    clearInterval(this.tid);
};

Timer.prototype.resume = function() {
    var me = this;

    this.tid = setInterval(function() {
        ++me.sec;
        me.emit('tick', [me.sec]);

        if (me.endTime <= me.startTime + ( me.sec * 1000 ) ) {
            me.stop();
        }
    }, 1000);
}

Timer.prototype.reset = function() {
    clearInterval(this.tid);
}

module.exports = new Timer();


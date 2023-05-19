

const EventEmitter = require('events');

var url = 'http://mylogger.io/log';
console.log(__filename);
console.log(__dirname);
class Logger extends EventEmitter{
    log(message)
    {
        //send HTTP request
        console.log(message);

        //raise an logging event
        this.emit('logging',{data:'event data'});
    }
}

module.exports=Logger;
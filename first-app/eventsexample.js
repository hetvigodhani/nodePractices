const EventEmitter = require('events');
// const emitter=new EventEmitter();

// //register an listener
// emitter.on('messageLogged',function(arg) //arg or e or Eventarg // function(arg){} or (arg)=>{}
// {
//     console.log('eventcalled',arg);
// });

// //register logging listener
// emitter.on('logging',(arg)=>
// {
//     console.log('logging event',arg);
// }); 

// // raise an event
// emitter.emit('messageLogged',{id: 1,data:'eventdata'});

// // raise an logging event
// emitter.emit('logging',{data:'event data'});

const Logger =require('./logger');
const logger =new Logger();

logger.on('logging',(arg)=>
{
    console.log('logging event',arg);
}); 

logger.log('hii');

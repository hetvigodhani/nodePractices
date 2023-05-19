const os=require('os');

var freeMem =os.freemem();
var totalMem =os.totalmem();

console.log('free memory:'+freeMem);
// console.log('total memory:'+totalMem);

console.log(`total memory: ${totalMem}`);
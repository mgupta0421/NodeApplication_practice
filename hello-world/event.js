var events = require('events');

var eventEmitter =  new events.EventEmitter();

var connectionHandler = function connected(){
    console.log('connection succesful.');
}

eventEmitter.on('connection',connectionHandler);
eventEmitter.emit('connection');
console.log("Program Ended.");
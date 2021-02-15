var events = require('events');

var eventEmitter =  new events.EventEmitter();

var connectionHandler = function connected(){
    console.log('connection succesful.');
}
// binds the event with the function
eventEmitter.on('connection',connectionHandler);
// invoke the event
eventEmitter.emit('connection');
console.log("Program Ended.");
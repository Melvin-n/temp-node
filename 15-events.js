//events
//event driven programming is used heavily in node

//common name is EventEmitter defined as a class

//common methods:
//on - listen for an event
//emit - emits an event
const EventEmitter = require('events');
const customEmitter = new EventEmitter()

//pass in name of the event
//multiple listeners can be initiated with same response
//order matters, listen must come before emit
customEmitter.on('response', (name, id) => {
    console.log(`data received user: ${name} id: ${id} `)
})
customEmitter.on('response', () => {
    console.log(`data received here as well`)
})


customEmitter.emit('response', 'john', 34)
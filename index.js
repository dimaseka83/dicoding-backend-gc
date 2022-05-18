const {EventEmitter} = require('events');

const birthdayEvenListener = (name) => {
    console.log(`Happy Birthday ${name}!`);
}

const myEmitter = new EventEmitter();

myEmitter.on('birthday', birthdayEvenListener);

myEmitter.emit('birthday', 'John');
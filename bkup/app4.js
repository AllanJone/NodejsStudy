var events = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person,events.EventEmitter);

var person1 = new Person('Naruto');
var person2 = new Person('Ichigo');
var person3 = new Person('Luffy');
var people = [person1,person2,person3];

people.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name + ' said ' + msg);
    });
});

people.forEach(function(people){
    people.emit('speak','Hi I am ' + people.name);
});

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent',function(msg){
//     console.log(msg);
// });

// myEmitter.emit('someEvent','the event is emitted');
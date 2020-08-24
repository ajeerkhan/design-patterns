import PersonBuilder from './PersonBuilder.js';

var alex = (new PersonBuilder('Alex Banks')).age(100).build();
var eve = (new PersonBuilder('Eve Porcello')).age(100).isEmployee(true).build();

console.log( alex.toString() )
console.log( eve.toString() )

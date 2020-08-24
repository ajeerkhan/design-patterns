import UserFactory from './userFactory.js';

var alex = UserFactory('Alex Banks', 100);
var eve =  UserFactory('Eve Porcello', 100, 'employee', 'This and That');
eve.payDay(100);

console.log( alex.toString() )
console.log( eve.toString() )

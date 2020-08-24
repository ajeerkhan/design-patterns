import Shopper from './Person.js';
import Employee from './Person.js';

var alex = new Shopper('Alex Banks', 100);
var eve = new Employee('Eve Porcello', 100, true);

console.log( alex.toString() )
console.log( eve.toString() )

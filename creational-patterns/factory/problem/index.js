import Shopper from './Shopper.js';
import Employee from './Employee.js';

var alex = new Shopper('Alex Banks', 100);
var eve = new Employee('Eve Porcello', 100, 'This and That');

console.log( alex.toString() )
console.log( eve.toString() )

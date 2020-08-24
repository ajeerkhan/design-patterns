/**
 * Problem: i want to have single object instance always throughout the application.
 * 
 * solution: singleton pattern
 *
 * consequences:
 * 
 * implemenation:
 * 
 * 
 * 
 */

 import {Logger, LoggerManager} from './logger.js';
 

 let loggerStar = new Logger('Star').getInstance();
 loggerStar.log('me from start');

 console.log('*************Start Report*************')
 console.log(loggerStar.toString());
 console.log('*************Start Repor endt*************')

 let loggerMoon = new Logger('Moon').getInstance();
 loggerMoon.log('me from moon-1');
 loggerMoon.log('me from moon-2');
 loggerMoon.log('me from moon-3');
 console.log('*************Moon Report*************')
 console.log(loggerMoon.toString());
 console.log('*************Moon Repor endt*************')


 //Approach 2
 console.log('')
 console.log('*************Approach 2*************')
 console.log('')
 loggerStar = LoggerManager.getInstance('Star');
 loggerStar.log('me from start');

 console.log('*************Start Report*************')
 console.log(loggerStar.toString());
 console.log('*************Start Repor endt*************')

 loggerMoon = LoggerManager.getInstance('Moon')
 loggerMoon.log('me from moon-1');
 loggerMoon.log('me from moon-2');
 loggerMoon.log('me from moon-3');
 console.log('*************Moon Report*************')
 console.log(loggerMoon.toString());
 console.log('*************Moon Repor endt*************')

//Approach 3
console.log('')
console.log('*************Approach 3*************')
console.log('')
loggerStar = LoggerManager._getInstance('Star');
loggerStar.log('me from start');

console.log('*************Start Report*************')
console.log(loggerStar.toString());
console.log('*************Start Repor endt*************')

loggerMoon = LoggerManager._getInstance('Moon')
loggerMoon.log('me from moon-1');
loggerMoon.log('me from moon-2');
loggerMoon.log('me from moon-3');
console.log('*************Moon Report*************')
console.log(loggerMoon.toString());
console.log('*************Moon Repor endt*************')


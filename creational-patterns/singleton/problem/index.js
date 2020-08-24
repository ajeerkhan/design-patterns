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

 import Logger from '../singleton/logger.js';

 const loggerStar = new Logger('Star');
 loggerStar.log('me from start');

 console.log('*************Start Report*************')
 console.log(loggerStar.toString());
 console.log('*************Start Repor endt*************')

 const loggerMoon = new Logger('Moon');
 loggerMoon.log('me from moon-1');
 loggerMoon.log('me from moon-2');
 loggerMoon.log('me from moon-3');
 console.log('*************Moon Report*************')
 console.log(loggerMoon.toString());
 console.log('*************Moon Repor endt*************')
// console.log(Object.getPrototypeOf(loggerStar));
// console.log(Object.getPrototypeOf(loggerMoon));
 
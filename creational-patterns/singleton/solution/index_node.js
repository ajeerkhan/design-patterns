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

 import MyLogger from './logger.js';
 //const MyLogger = require('./logger');
 let loggerStar = MyLogger;
 loggerStar.log('me from start');

 console.log('*************Start Report*************')
 console.log(loggerStar.toString());
 console.log('*************Start Repor endt*************')

 let loggerMoon = MyLogger;
 loggerMoon.log('me from moon-1');
 loggerMoon.log('me from moon-2');
 loggerMoon.log('me from moon-3');
 console.log('*************Moon Report*************')
 console.log(loggerMoon.toString());
 console.log('*************Moon Repor endt*************')


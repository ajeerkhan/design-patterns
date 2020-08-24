import ShopperRoot from './root-shopper.js';
//var Shopper = require('./Shopper');

var alex = ShopperRoot.clone();
alex.name='Alex Banks';
alex.addItemToList('slingshot');

var eve = ShopperRoot.clone();
eve.name='Eve Porcello';
eve.addItemToList('reading light');

console.log( `${alex.name}: ${alex.shoppingList}` );
console.log( `${eve.name}: ${eve.shoppingList}` );

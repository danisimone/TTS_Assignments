var shoppingList = ['poptarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
shoppingList.push('fruit loops');
/*
for (var i = 0; i < shoppingList.length; i++) {
     if (shoppingList [ i ] == 'coffee' ) {
         shoppingList [ i ] = 'fair trade coffee';
     }
}
*/
var temp = shoppingList.indexOf('coffee');
shoppingList[temp] = 'fair trade coffee';

var temp = shoppingList.indexOf('chips');
shoppingList[temp] = 'rice';

var temp = shoppingList.indexOf('salsa');
shoppingList[temp] = 'beans';

var shoppingCart = [];

temp = shoppingList.pop();
shoppingCart.push(temp)

//shoppingCart.push(shoppingList.pop());

temp = shoppingList.shift();
shoppingCart.push(temp);

while (shoppingList.length != 0){
    temp = shoppingList.pop();
    shoppingCart.push(temp)
}

shoppingCart.sort().reverse();

console.log(shoppingCart.join());

//console.log(shoppingCart);
//console.log(shoppingList);
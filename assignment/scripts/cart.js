console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
//this will: adds items to cart
function addItem(item){
basket.push(item);
return true;
}
// this will: list the items in the cart
function listItems(){
for( let i=0; i<basket.length; i++);
}
// this will: empty the cart
function empty(){
 basket = [];
}
console.log("added item to basket");
addItem('apple');

console.log(addItem() );
console.log(basket);
console.log(listItems() );
empty();
console.log(basket);

addItem('orange');
addItem('peach');
addItem('pear');
addItem('apple sauce');
addItem('raisins');

console.log('added items');
console.log(basket);

console.log('empty cart');
empty();
console.log(basket);

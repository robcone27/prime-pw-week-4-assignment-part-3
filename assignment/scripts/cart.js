console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item){
basket.push(item);
return true;
}
function listItems(){
for( let i=0; i<basket.length; i++);
}

function empty(){
 basket = [];
}

addItem('apple');
console.log(addItem() );
console.log(basket);
console.log(listItems() );
empty();
console.log(basket);

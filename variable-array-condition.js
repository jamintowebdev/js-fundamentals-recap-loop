// variable 
var bottleColor = 'yellow';
var waterQuantity = 1;
var isFull = false;


// array
var items = ['bottle', 'mug', 'paper', 'pen'];
items.indexOf('mug');
items.indexOf('lozens'); // array er moddhe value na takle result -1 ashbe

items.push('envelope');
items.push('watch');

items.pop();


// conditionals
if (items.length >= 4 ) {
    console.log('You have too many stuff on your desk');
}
else if (items.length == 4 ) {
    console.log('you have only one hali items');
}
else {
    console.log('Wow! You have a clean desk.');
}
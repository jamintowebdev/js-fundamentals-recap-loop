/* ------------------------
    var roastGiven = 0;
    while (roastGiven < 7) {
        console.log('Roast den na vai, Please!!');
    } 
---------------------------
*/


// exactly the same as above
var roastGiven = 0;
var i = 0; 

for (var roastGiven = 0; roastGiven < 7; roastGiven++) {
    console.log('Roast den na vai, Please!!');
}

for ( var i = 0; i < 7; i++) {
    console.log('for loop as var i' + ' ' +i);
}


/* 
    Note: you need not set the variable name and value outside of the for loop like others program. Because, You can declare your variable name and value inside the for loop at a time. 
*/

// Odd
// i = i + 2
// i+=2
for (var i = 1; i <= 20; i+=2) {
    console.log('Printing Odd Number' + ' ' + i);
}


// Even
// i = i + 2
// i+=2
for (var i = 0; i <= 30; i+=2) {
    console.log('Printing Even Number' + ' ' + i);
}
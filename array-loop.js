// If you want to run loop in your array, then follow this technique.


/* 
    var numbers = [45, 86, 34, 87, 55, 12, 98, 82, 33, 44];

    for (var i = 0; i < 7; i++) {
        // If you need, You can add variable inside the for loop.
        var element = numbers[i];
        console.log(element);
    }
 */


/* 
    var numbers = [45, 86, 34, 87, 55, 12, 98, 82, 33, 44];

    for (var i = 0; i < numbers.length; i++) {
        // If you need, You can add variable inside the for loop.
        var element = numbers[i];
        console.log(element);
    } 
*/


var items = ['laptop', 'keyboard', 'mouse', 'speaker', 'usb cable', 'mobile'];

for ( var i = 0; i < items.length; i++) {
    var item = items[i];
    console.log(item);
}

var number = 0;
var secondNumber = 1;
var numbers = 1;
var numberAnother = 1;
var oddNumbers = 1;
var evenNumbers = 0;

while (number < 10) {
    console.log(number);
    number++;
}

while (numberAnother < 10) {
    console.log(numberAnother);
    numberAnother++;
}


while (number <= 10) {
    console.log(number);
    number++;
}


while (numbers <= 10) {
    console.log(numbers);
    numbers++;
}

while (secondNumber <= 20) {
    console.log(secondNumber);
    secondNumber++;
}

// Odd Numbers
while (oddNumbers <= 20) {
    console.log('Odd Numbers' + ' ' + oddNumbers);
    oddNumbers = oddNumbers + 2;
    // oddNumbers += 2; 
}


// Even Numbers
while (evenNumbers <= 20) {
    console.log('Even Numbers' + ' ' + evenNumbers);
    evenNumbers = evenNumbers + 2;
    // evenNumbers += 2; 
}
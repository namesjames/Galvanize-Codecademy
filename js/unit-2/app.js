// 2.1

var speed = 65;

// Complete the condition in the ()s on line 4
if (speed > 80 ) {
	// Use console.log() to print "Slow down
	console.log("Slow down");
} 
else {
	// Use console.log() to print "Drive safe"
console.log("Drive safe");

}

// 2.2

// This is what a function looks like:

var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};

// On line 12, we call the function by name
// Here, it is called 'dividebythree'
// We tell the computer what the number input is (i.e. 6)
// The computer then runs the code inside the function!
divideByThree(9);

// 2.3

// Below is the greeting function!
// See line 7
// We can join strings together using the plus sign (+)
// See the hint for more details about how this works.

var greeting = function (name) {
    console.log("Great to see you," + " " + name);
};

// On line 11, call the greeting function!
greeting("sup, homie")

// 2.4 

// Write your foodDemand function below.
// Last hint: In your reusable block of code, end each line
// with a semicolon (;)
var foodDemand = function (food) {
    console.log("I want to eat " + " " + food);
}
foodDemand("grapes")

// 2.5

// Nicely written function:
var calculate = function (number) {
    var val = number * 10;
    console.log(val);
};

// Badly written function with syntax errors!



var greeting = function(name)
{
console.log(name)
} 
greeting("whats up")

// 2.6

var orangeCost = function (cost) {
    var val = cost * 5;
    console.log(val);
};
orangeCost(5)

// 2.7

// Parameter is a number, and we do math with that parameter
var timesTwo = function(number) {
    return number * 2;
};

// Call timesTwo here!
var newNumber = timesTwo(8); {
console.log(newNumber);
}


// 2.8 

// Define quarter here.
var quarter = function(number) {
    return number/4;
};

if (quarter(0) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}

// 2.9

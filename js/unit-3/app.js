// 3.1 Write five console.log statements.

console.log (1)
console.log (2)
console.log (3)
console.log (4)
console.log (5)

// 3.2 Example of a for loop:

for (var counter = 1; counter < 11; counter++) {
	console.log(counter);
}

// 3.3 Change where the for loop starts.

for (var i = 5; i < 11; i = i + 1){
	console.log(i);
}

// 3.4 Edit this for loop

for (var i = 4; i < 24; i = i + 1) {
	console.log(i);
}

// 3.5 Edit this for loop!

for (var i = 5; i < 51; i += 5) {
	console.log(i);
}

// 3.6 Example for loop

for (var i = 8 ; i < 121; i += 12) {
	console.log(i);
}

// 3.7 Example of infinite loop. THIS WILL CRASH YOUR
// BROWSER. Don't run the code without changing it!

for (var i = 10; i >= -1; i -= 1) {
	console.log(i);
}

// 3.8 Write your very own for loop!

for (var i = 100; i >= 5; i -= 5) {
    console.log(i)
}

// 3.9 Arrays
var junk = ["james", "is", 2, 5];
console.log(junk)

// 3.10 
var junkData = ["Eddie Murphy", 49, "peanuts", 31];

console.log(junkData[3])

// 3.11

var cities = ["Melbourne", "Amman", "Helsinki", "NYC", "Denver", "Boulder", "Seattle", "Portland", "Austin"];

for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}

// 3.12

var names = ["James", "Tyler", "Zach", "Jamal", "Kevin"]

for (var i = 0; i < names.length; i++) {
    console.log("I know someone called " + names[i]);
}

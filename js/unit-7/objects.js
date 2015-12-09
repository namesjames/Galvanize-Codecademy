var answer = true;

// Here is an array of multiples of 8. But is it correct?
var multiplesOfEight = [8,16,24,32,40,];

// Test to see if a number from the array is NOT a true
// multiple of eight. Real multiples will return false.
var answer = multiplesOfEight[6] % 8 !== 0;

// Fizz Buzz

for (var j = 1; j < 21; j++) {


if (j % 3 === 0 && j % 5 === 0) {
    console.log("FizzBuzz");
}
else if  (j % 3 === 0) {
    console.log("Fizz");
}
else if  (j % 5 === 0) {
    console.log("Buzz");
}
else {
    console.log(j);
}
}

var getReview = function (movie) {

switch(movie) {
    case "Toy Story 2":
        return ("Great story. Mean prospector.");
        break;
    case "Finding Nemo":
        return ("Cool animation, and funny turtles.");
        break;
    case "The Lion King":
        return ("Great songs.");
        break;
    default:
        return ("I don't know!");
}
};

var me = {
    age: 25,
    country: "United States"
};

var bob = {
  name: "Bob Smith",
  age: 30
};
var susan = {
  name: "Susan Jordan",
  age: 25
};
// here we save Bob's information
var name1 = bob.name;
var age1 = bob.age;
// finish this code by saving Susan's information
var name2 = susan.name;
var age2 = susan.age;

// Take a look at our next example object, a dog
var dog = {
  species: "greyhound",
  weight: 60,
  age: 4
};

var species = dog["species"];
// fill in the code to save the weight and age using bracket notation
var weight = dog["weight"];
var age = dog["age"];


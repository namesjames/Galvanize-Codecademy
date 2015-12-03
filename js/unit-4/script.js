// 4.1
var coinFace = Math.floor(Math.random() * 2);

while(coinFace === 0){
	console.log("Heads! Flipping again...");
	var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");

// 4.2 

var understand = true;

while(understand){
	console.log("I'm learning while loops!");
	understand = false;
}

// 4.3

understand = true;

while(understand){
	console.log("I'm learning while loops!");
	//Change the value of 'understand' here!
	understand = false;
}

// 4.4

var bool = true;

while(bool){
    console.log("Less is more!");
    bool = false;
}

// 4.5
//Write a while loop that logs "I'm looping!" to the console three times. You can do this however you like, but NOT with three console.log calls.
    var loops = 0; 
    while(loops<3) { 
    console.log("I'm looping!");
    loops++; }
    
// 4.6
// Inside the soloLoop function, write a while loop that takes an initial condition that's true. Your loop should log "Looped once!" to the console, then change that initial condition to false.
var soloLoop = function(){
  while(soloLoop) {
  console.log("Looped once!");
  soloLoop = false;
}
};

soloLoop(true);
    
// 4.7 

// 4.8 

for (x=0;x<5;x++) {
    console.log("hi")
}
var understand = 3;
while(understand){
	console.log("I'm learning while loops!");
	understand = false;
}

// 4.9 do/while

var loopCondition = false;

do {
	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");	
} while (loopCondition);

// 4.10

var test = 1;

var getToDaChoppa = function(){
  // Write your do/while loop here!
do { 
    console.log("You should ");
    test =0;
} while(test);
};
getToDaChoppa();

// 4.11

// For
for (var x=1;x<5;x++) {
    console.log(x);
};

var apples = true;
// While
while (apples) {
    console.log("no");
    apples = false;
};
// Do
var test = 1;
do { 
    console.log("You should ");
    test =0;
} while(test);


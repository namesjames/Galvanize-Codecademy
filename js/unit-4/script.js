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





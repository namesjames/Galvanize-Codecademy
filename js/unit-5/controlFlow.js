var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}


var isEven = function(number) {
if (number % 2 === 0) {
return true;
}
else {
return false;
}
};
isEven(2);

var isEven = function(number) {
if (isNaN (number)) {
return "The input was not a number!";
} else if (number % 2 === 0) {
return true;
} else if (isNaN (number) === true) {
return "Your input isn't a number!";
}else {
return false;
}
};

for (j=1;j<5;j++) {
    console.log("hi");
}

var j = true;
while (j > 2) {
    console.log("There");
    j = false;
}

var color = prompt("What's your favorite primary color?","Type your favorite color here");

switch(color) {
  case 'red':
    console.log("Red's a good color!");
    break;
  case 'blue':
    console.log("That's my favorite color, too!");
    break;
    case 'yellow':
    console.log("Niiiiice!");
    break;
  default:
    console.log("I don't think that's a primary color!");
}

var candy = prompt("What's your favorite candy?","Type your favorite candy here.");

switch(candy) {
  case 'licorice':
    console.log("Gross!");
    break;
  case 'gum':
    console.log("I like gum!");
    break;
  case 'beets':
    console.log("...is that even a candy?");
    break;
  default:
  console.log("what are you even talk about..?");
}

var answer = prompt("What's your favorite style of beer?", "Enter your Answer Here");

switch(answer) {
  case 'pilsner':
    console.log("Ah, Pils!");
    break;
  
  case 'Lagger':
    console.log("Lagger-ific!");
    break;
  
  case 'Stout':
    console.log("Woot!");
    break;
    
    default: 
    console.log("Okay, never heard of it...");
}

var beer = prompt("Do you know how to brew beer?", "Enter your answer here");

switch(beer){
case 'Yes' :
    console.log("Cool, me too!");
    break;
case 'No' :
    console.log("Word, well you should check it out..");
    break;
case 'Kinda' :
    console.log("Kinda?");
    break;
default:
    console.log("It's a yes or no question, try again..");
}

var beer = prompt("Do you know how to brew beer?", "Enter your answer here");

switch(beer){
case 'Yes' :
    console.log("Cool, me too!");
    break;
case 'No' :
    console.log("Word, well you should check it out..");
    break;
case 'Kinda' :
    console.log("Kinda?");
    break;
default:
    console.log("It's a yes or no question, try again..");
}


var iLoveJavaScript = true;
var iLoveLearning = true;

if(iLoveJavaScript && iLoveLearning) {
  // if iLoveJavaScript AND iLoveLearning:
  console.log("Awesome! Let's keep learning!");
} else if(!(iLoveJavaScript || iLoveLearning)) {
  // if NOT iLoveJavaScript OR iLoveLearning:
  console.log("Let's see if we can change your mind.");
} else {
  console.log("You only like one but not the other? We'll work on it.");
}

var hungry = true;
var foodHere = true;

var eat = function() {
  if (hungry && foodHere == true) {
      return true;
  } else {
      return false;
  }
};

var tired = true;
var bored = false;

var nap = function() {
  if (tired || bored) {
      return true;
  } else {
      return false;
  }
};

var programming = false;

var happy = function() {
  if (!programming) {
      return true;
  } else {
      return false;
  }
};

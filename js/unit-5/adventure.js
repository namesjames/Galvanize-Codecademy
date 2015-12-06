var troll = prompt("You're walking through the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN?").toUpperCase();

switch(troll) {
  case 'FIGHT':
    var strong = prompt("How courageous! Are you strong (YES or NO)?").toUpperCase();
    var smart = prompt("Are you smart?").toUpperCase();
    if(strong === 'YES' || smart === 'YES') {
      console.log("You only need one of the two! You beat the troll--nice work!");
    } else {
      console.log("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");
    }
    break;
  case 'PAY':
    var money = prompt("All right, we'll pay the troll. Do you have any money (YES or NO)?").toUpperCase();
    var dollars = prompt("Is your money in Troll Dollars?").toUpperCase();
    if(money === 'YES' && dollars === 'YES') {
      console.log("Great! You pay the troll and continue on your merry way.");
    } else {
      console.log("Dang! This troll only takes Troll Dollars. You get whomped!");
    }
    break;
  case 'RUN':
    var fast = prompt("Let's book it! Are you fast (YES or NO)?").toUpperCase();
    var headStart = prompt("Did you get a head start?").toUpperCase();
    if(fast === 'YES' || headStart === 'YES') {
      console.log("You got away--barely! You live to stroll through the forest another day.");
    } else {
      console.log("You're not fast and you didn't get a head start? You never had a chance! The troll eats you.");
    }
    break;
  default:
    console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
}

// My Version

var user = prompt("You're walking down one of your local streets and from a far you spot a person that you went to high school with and don't particularly like. You know it's going to be an awkward situation, what do you do?", "Enter either: Run, Hide, or INTERACT").toUpperCase();

switch(user) {
    case 'RUN':
        console.log("Quick, let's get out of here!");
        var run = prompt("Oh Crap, that's so-and-so over there, should we run away (YES or NO)?").toUpperCase();
    var fast = prompt("Come on! Are you faster than that?!? (YES or NO)?").toUpperCase();
    
    if(run === 'YES' || fast === 'YES') {
      console.log("There's no way they'll catch us!");
    } else {
      console.log("Crap, we're out of shape!");
    }
        break;
    
    
    case 'HIDE':
        var dumb = prompt("Are you just going to stand there?! (YES or NO)?").toUpperCase();
    var smart = prompt("Should we hide in that bakery? (YES or NO)?").toUpperCase();
    
    if(dumb === 'YES' && smart === 'YES') {
      console.log("I think we're safe, phew!");
    } else {
      console.log("That wasn't smart... busted.");
    }
        break;
    
    
    case 'INTERACT':
        console.log("Whatever, let's get this over with");
        break;
    
    
    default:
        console.log("Hello??");
    }

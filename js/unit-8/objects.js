
var james = {
    job: "programmer",
    married: false
};

function Person(job, married) {
    this.job = job;
    this.married = married;
}

var gabby = new Person("student", true);

function Person(job, married) {
    this.job = job;
    this.married = married;
    // add a "speak" method to Person!
    this.speak = function() {
        console.log("Hello!");
    };
}
var user = new Person("Codecademy Student",false);
user.speak();

var james = {
    job: "programmer",
    married: false,
    speak: function(mood) {
        console.log("Hello, I am feeling great");
        console.log("Hello, I am feeling just okay");
    }
};

james.speak("great");
james.speak("just okay");

var james = {
    job: "programmer",
    married: false,
    sayJob: function() {
        // complete this method
        console.log("Hi, I work as a " + james.job);
    }
};

james.sayJob();

james.job = "super programmer";

james.sayJob();

var james = {
    job: "programmer",
    married: false
};

var aProperty = 'job';

console.log(james[aProperty]);

var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";

console.log( typeof anObj  ); 
console.log( typeof aNumber ); 
console.log( typeof aString );

var myObj = { name: "James" };

console.log( myObj.hasOwnProperty('name') ); 
console.log( myObj.hasOwnProperty('nickname') ); 

var suitcase = {
    shirt: "Hawaiian"
};

if (suitcase.hasOwnProperty('shorts')) {
        console.log(suitcase.shorts);
}
    else {
        suitcase.shorts = "cargo jorts";
        console.log(suitcase.shorts)
    }
    
var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

for(var property in nyc) {
    console.log(property);
}

var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

var j = ["fullName", "mayor", "population", "boroughs"];
for(var j in nyc) {
    console.log(nyc[x]);
}

function Person(name,age) {
  this.name = name;
  this.age = age;
}

var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 35);

function Circle(radius) {
    this.radius = radius;
    }
    
function Dog (breed) {
  this.breed = breed;
}

var buddy = new Dog("Golden Retriever");
buddy.bark = function() {
  console.log("Woof");
};
buddy.bark();

var snoopy = new Dog("Beagle");

snoopy.bark = function() {
    console.log("Ruff");
};
snoopy.bark();

function Person(name,age) {
  this.name = name;
  this.age = age;
}

var printPersonName = function (p) {
  console.log(p.name);
};

var bob = new Person("Bob Smith", 30);
printPersonName(bob);

var me = new Person("James", 25);
printPerson(james);

function Dog (breed) {
  this.breed = breed;
};

var buddy = new Dog("golden Retriever");
Dog.prototype.bark = function() {
  console.log("Woof");
};
buddy.bark();

var snoopy = new Dog("Beagle");

snoopy.bark();

function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
}

var cheshire = new Cat("Cheshire Cat", "British Shorthair");
var gary = new Cat("Gary", "Domestic Shorthair");

Cat.prototype.meow = function () {
    console.log("Meow!");
};

cheshire.meow();
gary.meow();

function Animal(name, numLegs) {
this.name = name;
this.numLegs = numLegs;
};

Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

var penguin = new Animal("Captain Cook", 2);
penguin.sayName();

function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};


function Penguin(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}

Penguin.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

var theCaptain = new Penguin("Captain Cook", 2);
theCaptain.sayName();

function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

function Penguin(name, numLegs) {
    this.name = name;
    this.numLegs = 2;
}

Penguin.prototype = new Animal ();

var penguin = new Penguin("James");
penguin.sayName( );

function Penguin(name) {
this.name = name;
this.numLegs = 2;
}

function Emperor (name) {
this.name = name;
}
Emperor.prototype = new Penguin (); 
var emperor = new Emperor ( "e" );
console.log(emperor.numLegs);

function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.isAlive = true;
}
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
function Emperor(name) {
    this.name = name;
    this.saying = "Waddle waddle";
}

Penguin.prototype = new Animal();
Emperor.prototype = new Penguin();

var myEmperor = new Emperor("Jules");

console.log(myEmperor.saying);
console.log(emperor.numLegs);

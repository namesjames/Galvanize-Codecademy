
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

// james' first job
james.sayJob();

// change james' job to "super programmer" here
james.job = "super programmer";

// james' second job
james.sayJob();

var james = {
    job: "programmer",
    married: false
};

// set to the first property name of "james"
var aProperty = 'job';

// print the value of the first property of "james" 
// using the variable "aProperty"
console.log(james[aProperty]);

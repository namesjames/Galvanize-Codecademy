var list = [0,1,2,3,4,]

var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

console.log(languages[2]);

console.log(languages.length);

for (var j = 0; j < languages.length; j++) {
    console.log(languages[j]);
}

var newArray = [[1, 1,2], [2, "j", "i"], [3, true, false,]];

var jagged = [[1, 2,3], [2, "j"]]

var phonebookEntry = {};

phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};

phonebookEntry.phone();

var me = new Object();
    me.name = "James";
    me.age = 1;
    
    var object1 = new Object();
    object1.age = 1;
    
var object2 = new Object();
    object2.age = 2;

var object3 = new Object();
    object3.age = 3;



var myOwnObject = {
    name: 'james',
    age: 1,
    cool: 'very',
};

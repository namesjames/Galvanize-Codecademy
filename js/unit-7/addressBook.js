var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-777",
    email: "bob.jones@example.com"
};

console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.email);

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888 - 8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

console.log(mary.phoneNumber);

var printPerson = function(person) {
    console.log(person.firstName + " " + person.lastName);    
};

printPerson(contacts[0]);

printPerson(contacts[1]);

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

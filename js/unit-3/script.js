/*jshint multistr:true */


text = "Blah blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah blah blah Eric";

var myName = "Eric";
var hits = [];

// Look for "E" in the text
for(var i = 0; i < text.length; i++) {
	if (text[i] === "E") {
		// If we find it, add characters up to
		// the length of my name to the array
		for(var j = i; j < (myName.length + i); j++) {
			hits.push(text[j]);
		}
	}
}

if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}

// 3.2.2

var text = "Hello, what's up? My name is James.\
How are you?";
    var myName = "James";
        var hits = [];
        
// 3.2.3         
        for(var i = 0; i < text.length; i++) {
        	
        }
   
// 3.2.4
   for(var i = 0; i < text.length; i++) {
        	if(text[i] === "J"); {
        	}
        }
// 3.2.5

        for(var i = 0; i < text.length; i++) {
        	if(text[i] === "J"); {
        	    for(var j = i; j < (myName.length + i); j++) {
        	        hits.push(text[j]);
        	    }
        	}
        }
// 3.2.6

/*jshint multistr:true */

var text = "Hello, what's up? My name is James.\
How are you?";
    var myName = "James";
        var hits = [];
        
        for(var i = 0; i < text.length; i++) {
        	if(text[i] === "J"); {
        	    for(var j = i; j < (myName.length + i); j++) {
        	        hits.push(text[j]);
        	    }
        	}
        }
        if (hits.length === 0){
            console.log("Your name wasn't found!");
        }
            else {
                console.log(hits)
            }

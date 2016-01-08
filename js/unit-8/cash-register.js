var cashRegister = {
    total: 0,
    add: function(itemCost) {
        this.total += itemCost;
    },

    scan: function (item) {
        switch (item) { 
        case "eggs": 
            this.add(0.98); 
            break;

        case "milk": 
            this.add(1.23); 
            break;

        //Add other 2 items here
        case "magazine":
            this.add(4.99);
            break;

        case "chocolate":
            this.add(0.45);
            break;
        }
        return true;    
    }
};

//Scan 2 eggs and 3 magazines
cashRegister.scan("eggsccashRegister.scan("eggsccashRegister.scan("magazineccashRegister.scan("magazineccashRegister.scan("magazine/Show the total bill
console.log('Yourl is '+cashRegister.total);

var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    },
    scan: function(item,quantity) {
        switch (item) {
        case "eggs": this.add(0.98*quantity); break;
        case "milk": this.add(1.23*quantity); break;
        case "magazine": this.add(4.99*quantity); break;
        case "chocolate": this.add(0.45*quantity); break;
        }
    }
};
cashRegister.scan("eggs",4cashRegcashRegister.scan("milk",4cashRegcashRegister.scan("magazine",4cashRegcashRegister.scan("chocolate",4consolconsole.log('Yourl is '+cashRegister.total);

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost) {
        this.total +=  itemCost;
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function() {
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0; 
    }
};

cashRegister.scan('eggs',1cashRcashRegister.scan('milk',1cashRcashRegister.scan('magazine',1cashRcashRegister.scan('chocolate',4Register.voidLastTransaction(); 
cashRegister.scan("chocolate;

//Show the total bill
console.log('Yourl is '+ cashRegister.total);

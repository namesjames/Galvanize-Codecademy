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

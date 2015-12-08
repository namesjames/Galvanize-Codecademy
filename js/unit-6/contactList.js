var friends = {
    bill: {
        firstName: 'Bill',
        lastName: 'Gates',
        number: '123-456-7890',
        address: ['One Microsoft Way','Redmond','WA','98052']
        },
    steve: {
        firstName: 'Steve',
        lastName: 'Jobs',
        number: '123-459-7890',
        address: ['One Apple Way','Capurtino','CA','88059']
        },
    james: {
        firstName: 'James',
        lastName: 'Names',
        number: '123-454-7890',
        address: ['One James Way','Denver','CO','80202']
    }
};

  var list = function(friends) {
  for (var number in friends){
    console.log(number);
    };



  var search = function(name){
  for(var prop in friends)
    if(name === friends[prop].firstName){
      console.log(friends[prop]);
        return friends[prop];
  }
     }
};

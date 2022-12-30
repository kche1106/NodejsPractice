var OrientDB =require('orientjs');

var server = OrientDB({
    host:'localhost',
    port:2424,
    username:'root',
    password:'rlacodms01'
})
var db =server.use('o2');
db.record.get('#234:0').then(function(record){
    console.log('Loaded record:',record.title);
  });


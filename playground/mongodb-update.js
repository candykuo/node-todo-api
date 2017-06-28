// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log ('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5953ccc285a1fad96fb715a1')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((results) => {
    console.log(results);
  });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5953d1d585a1fad96fb717f0")
  }, {
    $set: {
      name: 'Candy'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((results) => {
    console.log(results);
  })

  // db.close();
});

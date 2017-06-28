// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log ('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((results) => {
  //   console.log(results);
  // })

  //findOneAndDelete
  db.collection('Users').deleteMany({name: 'Candy'}).then((results) => {
    console.log(results);
  })

  db.collection('Users').deleteOne({_id: ObjectID('59517203cdc56d02c768152e')}).then((results) => {
    console.log(results);
  })

  // db.close();
});

const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} =require('./../server/models/users');

// var id = '59555ec3ea222b14667f45d722';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid')
// }

//Returns an array
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// //Returns an object
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var userId = '595563617715ee14d0de98f1';

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User By Id', user);
}).catch((e) => console.log(e));

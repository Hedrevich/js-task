import Book from './Book'
import Publisher from './Publisher'
function Person(person) {
  this.id = person.id;
  this.firstname = person.firstname;
  this.lastname = person.lastname;
  this.age = person.age;
  this.likes = [];

  // for (let book in person.likes)
  // {
  //   this.likes.push(new Book(person.likes[book]));
  // }
  this.likes = (person.likes || []).map(book => new Book(book));
  console.log(person);
} 

export default Person

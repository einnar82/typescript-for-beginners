import Person from "./person";
//generic function
const echo = <T> (args: T): T => args;

const generic: number = echo(1)

class Admin extends Person { }
class Manager extends Person { }

let manager = new Manager('John', 'Doe');

//polymorphism
const returnPerson = <T extends Person> (person: T): T => {
  return person;
}

console.log(generic);
console.log(returnPerson(manager));
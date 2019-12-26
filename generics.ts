const echo = <T> (args: T): T => args;

const generic: number = echo(1)
console.log(generic);

class Person {
  protected firstName: string;
  protected lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public getFullName = (): string => {
    return `${this.firstName} ${this.lastName}`
  }
}

class Admin extends Person { }
class Manager extends Person { }

let manager = new Manager('John', 'Doe');
const returnPerson = <T extends Person> (person: T): T => {
  return person;
}

console.log(returnPerson(manager));
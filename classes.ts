import Person from "./person";

//inheritance
class Programmer extends Person {
  protected age: number;

  constructor(firstName: string, lastName: string, age?: number) {
    super(firstName, lastName);
    this.age = age;
  }

  public getAge = (): number => {
    return this.age;
  }
}



const person = new Programmer('Rannie', 'Ollit', 28);

console.log(person.greet())
console.log(person.getAge())
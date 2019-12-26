class Person {
  protected firstName: string;
  protected lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public getFirstName = (): string => {
    return this.firstName;
  }

  public setFirstName = (value: string): void => {
    this.firstName = value
  }

  public getLastName = (): string => {
    return this.lastName;
  }

  public setLastName = (value: string): void => {
    this.lastName = value
  }

  public getFullName = (): string => {
    return `${this.firstName} ${this.lastName}`
  }

  public greet = (): string => {
    return 'hello'
  }
}

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
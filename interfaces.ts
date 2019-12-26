interface Person {
  firstName: string;
  lastName: string;
  getFullName (): string;
}

class Programmer implements Person {
  public firstName: string;
  public lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public getFullName = (): string => {
    return `${this.firstName} ${this.lastName}`;
  };
}

//duck typing
let programmer: Person = new Programmer('Rannie', 'Ollit');



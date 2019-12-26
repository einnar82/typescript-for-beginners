export default class Person {
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

//module example
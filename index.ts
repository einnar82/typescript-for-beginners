//data types
const a: number = 10;
const bool: boolean = true;
const numbers: number[] = [1, 2, 3];
const anyVariable: any = 1
const flexibleVar: number | boolean = 1;

console.log(a);
console.log(bool);
console.log(numbers);

//tuple

const myArray: [number, boolean] = [1, true]

//function arguments
const add = (num1: number, num2: number, num3: number = 0): number => num1 + num2 + num3

const greet = (): string => 'Good morning';

console.log(add(1, 2));
console.log(anyVariable);
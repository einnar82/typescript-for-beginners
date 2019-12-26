// when declaring third party libraries without type declarations
// you may defined it on the .d.ts file
// and used it via <reference path="index.d.ts"/>
declare module 'rannie' {
  export interface Payment {
    amount: string;
    name: string;
  }
}
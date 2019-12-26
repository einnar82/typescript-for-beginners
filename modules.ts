///<reference path="index.d.ts"/>
import { Payment } from 'rannie';

const sendPayment = (payment: Payment): Payment => {
  return payment;
}

const newPayment: Payment = {
  amount: '300PHP',
  name: 'Online Payment'
}

console.log(sendPayment(newPayment));
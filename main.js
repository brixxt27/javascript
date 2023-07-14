// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 1)
//     continue;
//   console.log(`Number is ${i}`);
// }

// console.log('------------');

// for (let i = 0; i <= 10; i++) {
//   if (i >= 8)
//     break;
//   console.log(`Number is ${i}`);
// }

// const printYes = () => {
//   console.log('Yes!')
// }

// function printNo() {
//   console.log('No!');
// }

// // (function randomQuiz(string, printYes = () => {console.log('1')}, printNo = () => {console.log('2')}) {
// //   if (string === 'Happy') {
// //     printYes();
// //   } else {
// //     printNo();
// //   }
// // })('AniAni');// IIFE 을 사용하면 함수의 선언이 없어지는 것 같다. 이후에 이 함수를 사용할 수 없다.
// function randomQuiz(string, printYes = () => {console.log('1')}, printNo = () => {console.log('2')}) {
//   if (string === 'Happy') {
//     printYes();
//   } else {
//     printNo();
//   }
// }

// randomQuiz('Melong');
// randomQuiz('Happy');
// randomQuiz('Melong', printYes, printNo);
// randomQuiz('Happy', printYes, printNo);

// calculator
// function calculator(command, n1, n2) {
//   switch(command) {
//     case 'add':
//       return n1 + n2;
//       break;
//     case 'substract':
//       return n1 - n2;
//       break;
//     case 'devide':
//       return n1 / n2;
//       break;
//     case 'multiply':
//       return n1 * n2;
//       break;
//     case 'remainder':
//       return n1 % n2;
//       break;
//     default:
//       return (`Please check the command!
//       Commands are avaliable below this.
//       example: 'add, substract, devide, multiply, remainder'`);
//   }
// }

// console.log(calculator('add', 2, 1));
// console.log(calculator('substract', 2, 1));
// console.log(calculator('devide', 2, 1));
// console.log(calculator('multiply', 2, 1));
// console.log(calculator('remainder', 2, 1));
// console.log(calculator('seoul', 2, 1));

// class Human {
//   constructor(name = 'jayoon', age = 27, sex = 'man') {
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
//   }

//   printProperty() {
//     console.log(`    name: ${this.name}
//     age: ${this.age}
//     sex: ${this.sex}`)
//   }

//   static grade = 1;
//   static printGrade() {
//     console.log(this.grade);
//   }
// }

// How to save value when variable is assinged by object
// let A = new Human('kipark');
// console.log(A.name);
// let B = A;
// A = new Human('jiyokim');

// console.log(A.name);
// console.log(B.name);

// Human.printGrade(Human.grade);
// const man = new Human('jayoon', 27, 'man');

// How to use static member function and variable.
// // Human.printGrade();
// console.log(Human.grade);

// man.age = 20;
// console.log(man.age);

// continue
// var string = 'Hello World!';
// var word = 'l';
// var count = 0;

// for (var i = 0; i < string.length; i++) {
//   if (string[i] !== word)
//     continue;

//   count++;
//   console.log(`count is ${count}!`);
// }

// Optional chaining 
// var elem = null;
// var elem;
// // var elem = new Human();

// elem?.printProperty();
// console.log(typeof elem);

// console.clear();

/**
 * Short circuit evaluation
 */
// var string = 0;

// var length = string && string.length;

// console.log(length);

/**
 * nullish coalescing
 */
// var data = '';
// var string = data || 'Hello World!';

// console.log(string);

var data = '';
var string = data ?? 'Hello World!'; // 0 이나 empty string 이 유효한 값일 때 이를 true 로 평가하여 의도한대로 뒤의 값을 반환 받음

console.log(string);
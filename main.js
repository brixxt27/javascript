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

class Human {
  #name;
  #_age = 22;
  constructor(name, age, sex) {
    this.name = name;
    this._age = age;
    this.sex = sex;
  }

  static grade = 1;
  // static printGrade() {
  //   console.log(grade);
  // }
}

const man = new Human('jayoon', 27, 'man');

// Human.printGrade();
console.log(Human.grade);

man.age = 20;
console.log(man.age);
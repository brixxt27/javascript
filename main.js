for (let i = 0; i <= 10; i++) {
  if (i % 2 === 1)
    continue;
  console.log(`Number is ${i}`);
}

console.log('------------');

for (let i = 0; i <= 10; i++) {
  if (i >= 8)
    break;
  console.log(`Number is ${i}`);
}

const printYes = () => {
  console.log('Yes!')
}

function printNo() {
  console.log('No!');
}

(function randomQuiz(string, printYes, printNo) {
  if (string === 'Happy') {
    printYes();
  } else {
    printNo();
  }
})('AniAni', printYes, printNo);

randomQuiz('Melong', printYes, printNo);
randomQuiz('Happy', printYes, printNo);
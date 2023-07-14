// const arr = [1, 2, 3, 4];

// arr.forEach(alert);

// 함수를 값으로 사용할 때 우측에 있는 함수명은 식별자로써 동작하지 않는다. 정의 되지 않다고 나온다. 이는 선언 되지 않은 함수라서 그런 것 같다. 어떠한 개체로써 사용하려면 선언하는 과정을 꼭 거쳐야 하고, 이는 좌항에 있어야 한다.
// const func = (n) => {
//   console.log(n);
// }
// func(2);

// initialize variable
// 선언과 초기화는 동시에 되지 않는다. 호이스팅으로 올려지는 변수는 선언되어 undefined 로 초기화 된 것 뿐이다.
// console.log(num);
// var num = 3;
// console.log(num);

// console.log(score); //undefined
// score = 80; // hoisting으로 인해 score을 할당 가능
// var score;
// console.log(score); //80 값 할당 이후 호출이므로 80이 된다.

function print() {
  console.log(a);
  console.log(b);
  
  var a = 10;
  const b = 20;
}

print();
// const - 재선언 금지, 재할당 금지
// let - 재선언 금지, 재할당 가능
// var - 재선언 가능, 재할당 가능 예전꺼

//true
//false
//null : 아무것도 없는 상태
//undefined : 정의되지 않은 상태

// array, list = const daysOfWeek= [1,2,3,4]
// daysOfWeek.push()

//object
// const player = {
//   name: "yejin",
//   points: 10,
//   fat: true,
// };
// console.log(player);
// console.log(player.name);
// player.points = player.points
//const 전체를 바꾸려고 하면 에러, object 안에를 바꾸는 건 가능
//파이썬 처럼 밖에서 새로운 속성 추가가 가능하다.
/*
function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm" + age);
}

sayHello("nico", 10);
sayHello("dal"), 23;
sayHello("lynn"), 21;

function plus(firstNumber, secondNumber) {
  console.log(firstNumber + firstNumber);
}

plus(8, 60);

const player = {
  name: "yejin",
  sayHello: function (otherPersonsName) {
    console.log("hello" + otherPersonsName + " nice to meet you");
  },
};

player.sayHello("lynn");

const calculator = {
  plus: function add(a, b) {
    return a + b;
  },
  minus: function minus(a, b) {
    return a - b;
  },
  divide: function divide(a, b) {
    return a / b;
  },
  multiply: function divide(a, b) {
    return a * b;
  },
  square: function square(a) {
    return a ** 2;
  },
  powerOf: function powerOf(a, b) {
    return a ** b;
  },
};
*/

// return 값을 리턴
//calculator, plus(2, 3);

//const age = prompt("How old are you"); 버튼도 못 바꾼다.

//console.log(typeof age, parseInt(age)); 데이터 타입 보기!

//문자를 숫자로 만들기
//parseInt("15")

//const age = parseInt(prompt("How old are you?"));

//console.log(isNaN());

/*
if (isNaN(age)) {
  console.log("Please write a number");
  /// condition === true 조건이 참이면 이 코드가 실행되고
} else {
  console.log("Thank u for writing a number.");
  // condition === false 조건이 거짓이면 이 코드가 실행된다.
}


if (isNaN(age) || age < 0) {
  console.log("Please put positive numbers");
} else if (age < 18) {
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("you can drink.");
} else if (age > 50 && age <= 80) {
  console.log("You should be careful of drinking.");
} else {
  console.log("you should not drink.");
}

*/

// 같다
// == 값만 비교
// === 유형도 비교/ 즉, int or boolean
// 같지 않다 / !==

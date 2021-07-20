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

// return 값을 리턴
calculator, plus(2, 3);

const age = prompt("How old are you"); //버튼도 못 바꾼다.

console.log(typeof age, parseInt(age)); //데이터 타입 보기!

//문자를 숫자로 만들기
//parseInt("15")

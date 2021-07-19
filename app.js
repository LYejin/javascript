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
const player = {
  name: "yejin",
  points: 10,
  fat: true,
};
console.log(player);
console.log(player.name);
//const 전체를 바꾸려고 하면 에러, object 안에를 바꾸는 건 가능
//파이썬 처럼 밖에서 새로운 속성 추가가 가능하다.

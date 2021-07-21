const title = document.querySelector(".hello h1:first-child"); //가능
console.log(title);

// 하나의 요소 리턴해준다.
// 그래서 3개여도 하나만 나온다.
// 전부 가져오고 싶다면 querySelectorAll - array
//getElementsByClassName() : 많은 element를 가져올때 씀(array를 반환)
//getElementsByTagName() : name을 할당할 수 있음(array를 반환)

// querySelector("#hello form") -> #은 무엇을 검색하는지 명확하지 않아서 써준다. 하위 유형도 가져온다.
// getElementByID() 랑 같은 의미이다.

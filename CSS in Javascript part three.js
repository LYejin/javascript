const h1 = document.querySelector(".hello h1:first-child"); //가능
console.dir(h1);

// function handleTitleClick() {
//   const clickedClass = "clicked"; //이렇게 하는게 틀리지 않을 경우가 많고 알려준다.
//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }

function handleTitleClick() {
  h1.classList.toggle("clicked");
}

// toggle은 remove, add 행동을 한다.
// className = 모든 걸 고친다.
// classList = html elements가 가지고 있는 하나의 요소를 사용하는 것

h1.addEventListener("click", handleTitleClick); // 괄호는 안 넣어도 된다

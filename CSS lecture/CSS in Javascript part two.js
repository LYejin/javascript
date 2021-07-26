const h1 = document.querySelector(".hello h1:first-child"); //가능
console.dir(h1);

function handleTitleClick() {
  const clickedClass = "clicked sexy-font"; //이렇게 하는게 틀리지 않을 경우가 많고 알려준다.
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
}
h1.addEventListener("click", handleTitleClick); // 괄호는 안 넣어도 된다

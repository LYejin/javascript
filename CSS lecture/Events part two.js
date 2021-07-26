const title = document.querySelector(".hello h1:first-child"); //가능
console.dir(title);

function handleTitleClick() {
  console.log("title was clicked");
  title.style.color = "blue";
}

function handleMouseEnter() {
  title.innerText = "mouse is here!";
}

function handleMouseLeave() {
  title.innerText = "mouse is gone!";
}

title.addEventListener("click", handleTitleClick); // 괄호는 안 넣어도 된다.
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
// html heading element = js 관점에서의 html

const title = document.querySelector(".hello h1:first-child"); //가능
//console.dir(title);
// on~~ : event
//title.style.color = "blue";
// event = 입력, 마우스로 하는 행동, wifi 연결 끊김 등등

function handleTitleClick() {
  console.log("title was clicked");
  title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick); // 괄호는 안 넣어도 된다.

// html heading element = js 관점에서의 html

const quotes = [
  {
    quoto: "오늘을 좋은 날입니다.",
    author: "이예진",
  },
  {
    quoto: "오늘을 좋은 날입니다.",
    author: "이예진",
  },
  {
    quoto: "오늘을 좋은 날입니다.",
    author: "이예진",
  },
  {
    quoto: "오늘을 좋은 날입니다.",
    author: "이예진",
  },
  {
    quoto: "오늘을 좋은 날입니다.",
    author: "이예진",
  },
  {
    quoto: "오늘을 좋은 날입니다.",
    author: "이예진",
  },
  {
    quoto: "오늘을 좋은 날입니다.",
    author: "이예진",
  },
  {
    quoto: "오늘을 좋은 날입니다.",
    author: "이예진",
  },
  {
    quoto: "오늘을 좋은 날입니다.",
    author: "이예진",
  },
  {
    quoto: "오늘을 좋은 날입니다.",
    author: "이예진",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

console.log(quotes[Math.floor(Math.random() * 10)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

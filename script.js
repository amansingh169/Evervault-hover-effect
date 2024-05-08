const card = document.querySelector(".card");
const text = document.querySelector(".text");

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

const randomChar = () => chars[Math.floor(Math.random(0, 100) * chars.length)],
  randomString = (length) => Array.from(Array(length)).map(randomChar).join("");

const handleOnMove = (e) => {
  const bounds = card.getBoundingClientRect(),
    x = e.clientX - bounds.left,
    y = e.clientY - bounds.top;

  text.style.setProperty("--x", `${x}px`);
  text.style.setProperty("--y", `${y}px`);

  text.innerText = randomString(5000);
};

card.onmousemove = (e) => handleOnMove(e);
card.ontouchmove = (e) => handleOnMove(e.touches[0]);

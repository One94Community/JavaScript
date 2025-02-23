main();
function main() {
  const button = document.querySelector("button");
  const body = document.querySelector("body");
  button.addEventListener("click", () => {
    body.style.backgroundColor = ranColore();
  });
}
const ranColore = () => {
  const red = Math.ceil(0 + Math.random() * 255);
  const green = Math.ceil(0 + Math.random() * 255);
  const blue = Math.ceil(0 + Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
};

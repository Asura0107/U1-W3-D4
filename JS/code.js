const tableboard = function () {
  const board = document.getElementById("tombola");
  for (let i = 0; i < 76; i++) {
    const cell = document.createElement("h3");
    const divcell = document.createElement("div");
    divcell.classList.add("cell");

    cell.innerText = i + 1;
    divcell.appendChild(cell);
    board.appendChild(divcell);
  }
};
// const fillArray = function () {
//   const arr = [];
//   for (let i = 0; i < 76; i++) {
//     arr.push(i + 1);
//   }
//   return arr;
// };

const getrandom = () => {
  const randIndex = Math.floor(Math.random() * 76);
  console.log(randIndex);
  const cells = document.querySelectorAll(".cell");
  cells[randIndex].classList.add("light");
};

window.onload = () => {
  const board1 = tableboard();
  const btn1 = document.getElementById("btn1");
  btn1.addEventListener("click", function () {
    getrandom();
  });
};

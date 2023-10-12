window.onload = () => {
  const tombolatable = document.getElementById("tombola");

  for (let i = 0; i < 76; i++) {
    const cell = document.createElement("h3");
    const divcell = document.createElement("div");
    divcell.className = "divcell";
    cell.innerText = i + 1;

    divcell.appendChild(cell);
    tombolatable.appendChild(divcell);
  }

  const Btn = document.getElementById("btn1");
  Btn.innerText = " Roll The Dice";
  const divbtn = document.getElementsByClassName("divbutton");
  //   divbtn.appendChild(Btn);
  Btn.onclick = function () {
    const randomindex = Math.floor(Math.random() * 76);
    console.log(randomindex);
    // const index = randomlist[randomindex];
  };
};

let turn = "O";
let xChecker = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let oChecker = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let turns = 0;

let slot1 = document.getElementById("slot1");
let slot2 = document.getElementById("slot2");
let slot3 = document.getElementById("slot3");
let slot4 = document.getElementById("slot4");
let slot5 = document.getElementById("slot5");
let slot6 = document.getElementById("slot6");
let slot7 = document.getElementById("slot7");
let slot8 = document.getElementById("slot8");
let slot9 = document.getElementById("slot9");
let turnLable = document.getElementById("turn");
let record = document.getElementById("record");

function setHistory(turn) {
  let history = [];
  let historymonotalog = `${turn} won `;
  history.push(historymonotalog);
  let History = JSON.stringify(history);
  localStorage.setItem("history", History);
}

function showRecord() {
  let history = JSON.parse(localStorage.getItem("history"));
  let historyCatalog = document.createElement("ul");
  for (let i = 0; i < history.length; i++) {
    let line = document.createElement("li");
    line.innerHTML = history[i];
    historyCatalog.appendChild(line);
  }
}

function gameOver() {
  let end = `GAAAAAAME OOOOVER !!

  WINNER IS ${turn}`;
  let restart = "Restart";
  let endScreen = document.createElement("div");
  endScreen.innerText = end;
  endScreen.classList.add("endScreen");
  document.body.append(endScreen);
  let restartButton = document.createElement("button");
  restartButton.innerText = restart;
  restartButton.classList.add("restart");
  restartButton.setAttribute("onclick", "location.reload()");
  endScreen.appendChild(restartButton);
  setHistory(turn);
}

function draw() {
  let end = `NNNOOO WINNNEERRRR
  
  TIE ...`;
  let restart = "Restart";
  let endScreen = document.createElement("div");
  endScreen.innerText = end;
  endScreen.classList.add("endScreen");
  document.body.append(endScreen);
  let restartButton = document.createElement("button");
  restartButton.innerText = restart;
  restartButton.classList.add("restart");
  restartButton.setAttribute("onclick", "location.reload()");
  endScreen.appendChild(restartButton);
}

function checkForWinner() {
  if (
    (xChecker[0][0] == 1 && xChecker[0][1] == 1 && xChecker[0][2] == 1) ||
    (xChecker[1][0] == 1 && xChecker[1][1] == 1 && xChecker[1][2] == 1) ||
    (xChecker[2][0] == 1 && xChecker[2][1] == 1 && xChecker[2][2] == 1) ||
    (xChecker[0][0] == 1 && xChecker[1][0] == 1 && xChecker[2][0] == 1) ||
    (xChecker[0][1] == 1 && xChecker[1][1] == 1 && xChecker[2][1] == 1) ||
    (xChecker[0][2] == 1 && xChecker[1][2] == 1 && xChecker[2][2] == 1) ||
    (xChecker[0][0] == 1 && xChecker[1][1] == 1 && xChecker[2][2] == 1) ||
    (xChecker[0][2] == 1 && xChecker[1][1] == 1 && xChecker[2][0] == 1)
  ) {
    gameOver();
  } else if (
    (oChecker[0][0] == 1 && oChecker[0][1] == 1 && oChecker[0][2] == 1) ||
    (oChecker[1][0] == 1 && oChecker[1][1] == 1 && oChecker[1][2] == 1) ||
    (oChecker[2][0] == 1 && oChecker[2][1] == 1 && oChecker[2][2] == 1) ||
    (oChecker[0][0] == 1 && oChecker[1][0] == 1 && oChecker[2][0] == 1) ||
    (oChecker[0][1] == 1 && oChecker[1][1] == 1 && oChecker[2][1] == 1) ||
    (oChecker[0][2] == 1 && oChecker[1][2] == 1 && oChecker[2][2] == 1) ||
    (oChecker[0][0] == 1 && oChecker[1][1] == 1 && oChecker[2][2] == 1) ||
    (oChecker[0][2] == 1 && oChecker[1][1] == 1 && oChecker[2][0] == 1)
  ) {
    gameOver();
  } else if (turns == 9) {
    draw();
  }
}

slot1.addEventListener("click", function checkTheBox() {
  if (turn == "O") {
    slot1.innerHTML = '<span class="X">X</span>';
    xChecker[0][0] = 1;
    turn = "X";
    turnLable.innerText = `${turn} just played , it's your turn`;
  } else {
    slot1.innerHTML = '<span class="O">O</span>';
    oChecker[0][0] = 1;
    turn = "O";
    turnLable.innerText = `${turn} just played , it's your turn`;
  }
  turns++;
  console.log(turn, turns, xChecker, oChecker);
  checkForWinner();
  slot1.removeEventListener("click", checkTheBox);
});
slot2.addEventListener("click", function checkTheBox() {
  if (turn == "O") {
    slot2.innerHTML = '<span class="X">X</span>';
    xChecker[0][1] = 1;
    turn = "X";
    turnLable.innerText = `${turn} just played , it's your turn`;
  } else {
    slot2.innerHTML = '<span class="O">O</span>';
    oChecker[0][1] = 1;
    turn = "O";
    turnLable.innerText = `${turn} just played , it's your turn`;
  }
  turns++;
  console.log(turn, turns, xChecker, oChecker);
  checkForWinner();
  slot2.removeEventListener("click", checkTheBox);
});
slot3.addEventListener("click", function checkTheBox() {
  if (turn == "O") {
    slot3.innerHTML = '<span class="X">X</span>';
    xChecker[0][2] = 1;
    turn = "X";
    turnLable.innerText = `${turn} just played , it's your turn`;
  } else {
    slot3.innerHTML = '<span class="O">O</span>';
    oChecker[0][2] = 1;
    turn = "O";
    turnLable.innerText = `${turn} just played , it's your turn`;
  }
  turns++;
  console.log(turn, turns, xChecker, oChecker);
  checkForWinner();
  slot3.removeEventListener("click", checkTheBox);
});
slot4.addEventListener("click", function checkTheBox() {
  if (turn == "O") {
    slot4.innerHTML = '<span class="X">X</span>';
    xChecker[1][0] = 1;
    turn = "X";
    turnLable.innerText = `${turn} just played , it's your turn`;
  } else {
    slot4.innerHTML = '<span class="O">O</span>';
    oChecker[1][0] = 1;
    turn = "O";
    turnLable.innerText = `${turn} just played , it's your turn`;
  }
  turns++;
  console.log(turn, turns, xChecker, oChecker);
  checkForWinner();
  slot4.removeEventListener("click", checkTheBox);
});
slot5.addEventListener("click", function checkTheBox() {
  if (turn == "O") {
    slot5.innerHTML = '<span class="X">X</span>';
    xChecker[1][1] = 1;
    turn = "X";
    turnLable.innerText = `${turn} just played , it's your turn`;
  } else {
    slot5.innerHTML = '<span class="O">O</span>';
    oChecker[1][1] = 1;
    turn = "O";
    turnLable.innerText = `${turn} just played , it's your turn`;
  }
  turns++;
  console.log(turn, turns, xChecker, oChecker);
  checkForWinner();
  slot5.removeEventListener("click", checkTheBox);
});
slot6.addEventListener("click", function checkTheBox() {
  if (turn == "O") {
    slot6.innerHTML = '<span class="X">X</span>';
    xChecker[1][2] = 1;
    turn = "X";
    turnLable.innerText = `${turn} just played , it's your turn`;
  } else {
    slot6.innerHTML = '<span class="O">O</span>';
    oChecker[1][2] = 1;
    turn = "O";
    turnLable.innerText = `${turn} just played , it's your turn`;
  }
  turns++;
  console.log(turn, turns, xChecker, oChecker);
  checkForWinner();
  slot6.removeEventListener("click", checkTheBox);
});
slot7.addEventListener("click", function checkTheBox() {
  if (turn == "O") {
    slot7.innerHTML = '<span class="X">X</span>';
    xChecker[2][0] = 1;
    turn = "X";
    turnLable.innerText = `${turn} just played , it's your turn`;
  } else {
    slot7.innerHTML = '<span class="O">O</span>';
    oChecker[2][0] = 1;
    turn = "O";
    turnLable.innerText = `${turn} just played , it's your turn`;
  }
  turns++;
  console.log(turn, turns, xChecker, oChecker);
  checkForWinner();
  slot7.removeEventListener("click", checkTheBox);
});
slot8.addEventListener("click", function checkTheBox() {
  if (turn == "O") {
    slot8.innerHTML = '<span class="X">X</span>';
    xChecker[2][1] = 1;
    turn = "X";
    turnLable.innerText = `${turn} just played , it's your turn`;
  } else {
    slot8.innerHTML = '<span class="O">O</span>';
    oChecker[2][1] = 1;
    turn = "O";
    turnLable.innerText = `${turn} just played , it's your turn`;
  }
  turns++;
  console.log(turn, turns, xChecker, oChecker);
  checkForWinner();
  slot8.removeEventListener("click", checkTheBox);
});
slot9.addEventListener("click", function checkTheBox() {
  if (turn == "O") {
    slot9.innerHTML = '<span class="X">X</span>';
    xChecker[2][2] = 1;
    turn = "X";
    turnLable.innerText = `${turn} just played , it's your turn`;
  } else {
    slot9.innerHTML = '<span class="O">O</span>';
    oChecker[2][2] = 1;
    turn = "O";
    turnLable.innerText = `${turn} just played , it's your turn`;
  }
  turns++;
  console.log(turn, turns, xChecker, oChecker);
  checkForWinner();
  slot9.removeEventListener("click", checkTheBox);
});
showRecord();

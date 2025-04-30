let board = [];
let gameActive= false;
let currentPlayer = "X";
let playerNames = { X: "", O: "" };



function startGame() {
  const player1 = document.getElementById("player1").value;
  const player2 = document.getElementById("player2").value;

  if (!player1 || !player2) {
    alert("Por favor, preencha os nomes dos jogadores.");
    return;
  }

  playerNames.X = player1;
  playerNames.O = player2;
  currentPlayer = "X";
  gameActive = true;

  document.getElementById("turnInfo").textContent = `Vez de: ${playerNames[currentPlayer]} (${currentPlayer})`;


  createBoard();
}

function createBoard() {
  const boardElement = document.getElementById("board");
  boardElement.innerHTML = "";
  board = ["", "", "", "", "", "", "", "", ""];

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    cell.addEventListener("click", handleCellClick);
    boardElement.appendChild(cell);
  }
  document.getElementById("result").textContent = "";
}

function handleCellClick(event) {
  const index = event.target.dataset.index;

  if (!gameActive || board[index] !== "") {
    return;
  }

  board[index] = currentPlayer;
  event.target.textContent = currentPlayer;

  if (checkWinner()) {
    const message = `${playerNames[currentPlayer]} (${currentPlayer}) venceu!`;
    document.getElementById("result").textContent = message;
    gameActive = false;
    return;
  }

  if (!board.includes("")) {
    document.getElementById("result").textContent = "Empate!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  document.getElementById("turnInfo").textContent = `Vez de: ${playerNames[currentPlayer]} (${currentPlayer})`;
}

function checkWinner() {
  const winConditions = [
    [0,1,2], [3,4,5], [6,7,8], // Linhas
    [0,3,6], [1,4,7], [2,5,8], // Colunas
    [0,4,8], [2,4,6]           // Diagonais
  ];

  return winConditions.some(combination => {
    const [a, b, c] = combination;
    return board[a] && board[a] === board[b] && board[b] === board[c];
  });
}

function resetGame() {
  startGame();
}

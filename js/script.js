let playerResult = 0;
let computerResult = 0;

// for (playGame = 0; playGame < 20; playGame++);
// {
//   console.log("Loop iterration: " + playGame);
// }

function playGame(playerInput) {
  clearMessages();
  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return "kamień";
    } else if (argMoveId == 2) {
      return "papier";
    } else if (argMoveId == 3) {
      return "nożyce";
    } else {
      return "Nieznany ruch";
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log("Wylosowana liczba to: " + randomNumber);

  let computerMove = getMoveName(randomNumber);

  printMessage("Mój ruch to: " + computerMove);

  console.log("Gracz wpisał: " + playerInput);

  let playerMove = getMoveName(playerInput);

  function showPlayerWin() {
    playerResult = playerResult + 1;
    printMessage("Ty wygrywasz!");
    printResult(playerResult + ":" + computerResult);
  }

  function showComputerWin() {
    computerResult = computerResult + 1;
    printMessage("Przegrywasz!");
    printResult(playerResult + ":" + computerResult);
  }

  function displayResult(argComputerMove, argPlayerMove) {
    printMessage("Twój ruch to: " + argPlayerMove);
    if ((playerMove = getMoveName(1) && computerResult > 0.25 * playerResult)) {
      computerMove = getMoveName(3);
      showPlayerWin();
    } else if (
      (playerMove = getMoveName(2) && computerResult > 0.25 * playerResult)
    ) {
      computerMove = getMoveName(1);
      showPlayerWin();
    } else if (
      (playerMove = getMoveName(3) && computerResult > 0.25 * playerResult)
    ) {
      computerMove = getMoveName(2);
      showPlayerWin();
    } else if (argComputerMove == "kamień" && argPlayerMove == "papier") {
      showPlayerWin();
    } else if (argComputerMove == "kamień" && argPlayerMove == "nożyce") {
      showComputerWin();
    } else if (argComputerMove == "kamień" && argPlayerMove == "kamień") {
      printMessage("Remis!");
    } else if (argComputerMove == "papier" && argPlayerMove == "papier") {
      printMessage("Remis!");
    } else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
      showPlayerWin();
    } else if (argComputerMove == "papier" && argPlayerMove == "kamień") {
      showComputerWin();
    } else if (argComputerMove == "nożyce" && argPlayerMove == "papier") {
      showComputerWin();
    } else if (argComputerMove == "nożyce" && argPlayerMove == "nożyce") {
      printMessage("Remis!");
    } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
      showPlayerWin();
    }
  }

  displayResult(computerMove, playerMove);
}

document.getElementById("play-rock").addEventListener("click", function () {
  playGame(1);
});

document.getElementById("play-paper").addEventListener("click", function () {
  playGame(2);
});
document.getElementById("play-scissors").addEventListener("click", function () {
  playGame(3);
});

// function getResult(playerResult, computerResult) {
//   console.log();
//   if ((document.getElementById("messages").innerHTML = "Ty wygrywasz!")) {
//     printResult(playerResult + 1);
//   } else if ((document.getElementById("messages").innerHTML = "Przegrywasz!")) {
//     printResult(computerResult + 1);
//   }
// }

// console.log();
// function getResult() {
//   if (printMessage("Ty wygrywasz!")) {
//     printResult(playerResult + 1);
//   }
// }

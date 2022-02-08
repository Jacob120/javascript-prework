{
  let playerResult = 0;
  let computerResult = 0;

  const startGame = function playGame(playerInput) {
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

    const computerMove = getMoveName(randomNumber);

    printMessage("Komputer wylosował: " + computerMove);

    console.log("Gracz wpisał: " + playerInput);

    const playerMove = getMoveName(playerInput);

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
      if (argPlayerMove == "kamień" && computerResult > 0.25 * playerResult) {
        // randomNumber = 3;
        showPlayerWin();
      } else if (
        argPlayerMove == "papier" &&
        computerResult > 0.25 * playerResult
      ) {
        // randomNumber = 2;
        showPlayerWin();
      } else if (
        argPlayerMove == "nożyce" &&
        computerResult > 0.25 * playerResult
      ) {
        // randomNumber = 1;
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
  };

  document.getElementById("play-rock").addEventListener("click", function () {
    startGame(1);
  });

  document.getElementById("play-paper").addEventListener("click", function () {
    startGame(2);
  });
  document
    .getElementById("play-scissors")
    .addEventListener("click", function () {
      startGame(3);
    });
}

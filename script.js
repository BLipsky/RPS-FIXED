//Define Early

let disName;
let disComName;
document.getElementById("gameDiv").classList.add("d-none");
document.getElementById("new").classList.add("d-none");
document.getElementById("try").classList.add("d-none");
document.getElementById("body").classList.add("body1");

let computerValue = 0;
let humanValue = 0;
let diffPickerDrpDwn = document.querySelector("#difSelector");
const el = document.querySelector('.click')
const menu = document.querySelector('.menu');

//Popup (This is all grabbed from online just a cool function)

el.onclick = function() {
  menu.classList.toggle("showmenu");
}

window.onclick = function(e) {
  if (!e.classList.contains('menu') || !e.classList.contains('menu_item')) {
    menu.removeClass('showmenu');
  }
}

// Select Difficulty
function selectOne() {
  let difSelector = diffPickerDrpDwn.value; // Get the selected difficulty level
  if (difSelector === "difOne") {
    easyOne();
  } else if (difSelector === "difTwo") {
    normalOne();
  } else if (difSelector === "difThree") {
    hardOne();
  }
}
//Display Screen

function display() {
  difSelector = diffPickerDrpDwn.value;

  disComName = document.getElementById("comName").value;
  document.getElementById("displayComputerName").textContent = "CPU:";
  document.getElementById("displayComputerName1").textContent = disComName;

  disName = document.getElementById("plaName").value;
  document.getElementById("displayPlayerName").textContent = "Player:";
  document.getElementById("displayPlayerName1").textContent = disName;

  document.getElementById("body").classList.add("dope");
  document.getElementById("fullOne").classList.add("d-none");
  document.getElementById("gameDiv").classList.remove("d-none");
  document.getElementById("new").classList.remove("d-none");
  document.getElementById("bttn").classList.add("d-none");
  document.getElementById("menu").classList.add("d-none");

}

document.getElementById("lockInButton").addEventListener("click", lockInAnswer);

//Easy Option
function easyOne() {
  function responseNew1() {
    let humanRes = document.getElementById("humanRes").value;

    if (humanRes === "Rock") {
      return "Scissors";
    } else if (humanRes === "Paper") {
      return "Rock";
    } else if (humanRes === "Scissors") {
      return "Paper";
    } else {
      return "No Answer";
    }
  }

  let humanRes = document.getElementById("humanRes").value;
  let computerChoice = responseNew1();
  if (computerChoice !== "No Answer") {
    humanValue++; // Increment humanValue
    document.getElementById("displayScoreName1").textContent = humanValue;
    if (humanValue === 5) {
      endGame("Good Game!");
      document.getElementById("gameOver").classList.add("done1");
      document.getElementById("new").classList.remove("new");
      document.getElementById("new").classList.add("new3");
    }
  }

  document.getElementById("resOne").textContent = computerChoice;
}

//Hard Option
function hardOne() {
  function responseNew() {
    let humanRes = document.getElementById("humanRes").value;

    if (humanRes === "Rock") {
      return "Paper";
    } else if (humanRes === "Paper") {
      return "Scissors";
    } else if (humanRes === "Scissors") {
      return "Rock";
    } else {
      return "No Answer";
    }
  }

  let humanRes = document.getElementById("humanRes").value;
  let computerChoice = responseNew();
  
  if (computerChoice !== "No Answer") {
    computerValue++; // Increment computerValue
    document.getElementById("displayScoreName").textContent = computerValue;

    if (computerValue === 5) {
      endGame("Game Over!");
      document.getElementById("gameOver").classList.add("done");
      document.getElementById("new").classList.remove("new");
      document.getElementById("new").classList.add("new2");
      document.getElementById("new").classList.add("new2");
    }
  }

  document.getElementById("resOne").textContent = computerChoice;
}

// Function to end the game
function endGame(message) {
  document.getElementById("humanRes").classList.add("d-none");
  document.getElementById("lockInButton").classList.add("d-none");
  document.getElementById("gameOver").textContent = message;
  document.getElementById("resTwo").classList.add("d-none");
  document.getElementById("try").classList.remove("d-none"); // Show the "Try Again" button
}

//Normal Option
function normalOne() {
  let responseOneArray = [
    "Rock",
    "Paper",
    "Scissors",
    "Scissors",
    "Rock",
    "Paper",
    "Scissors",
  ];
  let randomNumber = Math.floor(Math.random() * responseOneArray.length);
  let computerChoice = responseOneArray[randomNumber]; // Get a random choice from the array
  let humanRes = document.getElementById("humanRes").value; // Get the human's choice
  
  if ((computerChoice === "Rock" && humanRes === "Scissors") ||
      (computerChoice === "Paper" && humanRes === "Rock") ||
      (computerChoice === "Scissors" && humanRes === "Paper")) {
    // Computer wins
    computerValue++;
  } else if ((computerChoice === "Rock" && humanRes === "Paper") ||
             (computerChoice === "Paper" && humanRes === "Scissors") ||
             (computerChoice === "Scissors" && humanRes === "Rock")) {
    // Human wins
    humanValue++;
  }
  
  // Update the displayed scores
  document.getElementById("displayScoreName").textContent = computerValue;
  document.getElementById("displayScoreName1").textContent = humanValue;
  
  // Display the computer's choice
  document.getElementById("resOne").textContent = computerChoice;
  
  // Check if anyone reached the winning score of 5
  if (computerValue === 5 || humanValue === 5) {
    endGame(computerValue === 5 ? "Game Over!" : "Good Game!");
    document.getElementById("gameOver").classList.add(computerValue === 5 ? "done" : "done1");
    document.getElementById("new").classList.remove("new");
    document.getElementById("new").classList.add(computerValue === 5 ? "new2" : "new3");
  }
}
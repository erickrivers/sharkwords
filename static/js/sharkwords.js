const ALPHABET = Array.from("abcdefghijklmnopqrstuvwxyz");
const WORDS = [
  "strawberry",
  "orange",
  "apple",
  "banana",
  "pineapple",
  "kiwi",
  "peach",
  "pecan",
  "eggplant",
  "durian",
  "peanut",
  "chocolate",
];

// Variables to keep track of the state of the game
let numWrong = 0;
const word = Array.from("hello");
// For now, we're hardcoding word. This makes it easier to manually test
// your code. You can change this to choose a random word from WORDS once you
// finish this lab.

// Generate a blank space for each letter in the word.
// Correctly guessed letters will "fill in the blank" and appear in the spaces.
// Each space is a div inside the section with id="word-container".
function generateDivsForChars(word) {}

// Generate a button for each letter in the alphabet.
// The user will click on these buttons to guess a letter in the word.
// The buttons should be appended to the section with id="letter-buttons"
function generateLetterButtons() {}

// Handle an incorrect guess.
// This is called when a button is clicked but the letter IS NOT in the word.
function handleIncorrectGuess() {}

// Handle a correct guess.
// This is called when a button is clicked and the letter IS in the word.
function handleCorrectGuess(guess) {}

// Return true if all the letters in the word have been guessed, false otherwise.
// This is a helper function called to check if the game is over because
// the user has successfully guessed the word.
function isAllLettersGuessed() {}

// Handle ending the game.
// This is called when the user has won or lost the game.
function endGame() {}

// An immediate invoked function expression (IIFE) used to kick off the game.
(function startGame() {
  generateDivsForChars(word);
  for (let i = 0; i < word.length; i++) {
    const div = document.createElement("div");
    div.classList.add("letter-box");
    document.querySelector("#word-container").append(div);
  }
  
  
  generateLetterButtons();
  ALPHABET.forEach((letter) => {
    const button = document.createElement("button");
    button.innerText = letter;
    document.querySelector("#letter-buttons").append(button);
  });

  document.querySelectorAll("#letter-buttons button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const clickedButton = e.target;
      const letter = clickedButton.innerText;

      if (!word.includes(letter)) {        
        handleCorrectGuess(letter);
        for (let i = 0; i < word.length; i++) {
          if (word[i] === letter) {
            document.querySelectorAll("#word-container div")[i].innerText = letter;
          }
        }

      } else {        
        handleIncorrectGuess();
        document.querySelector("#wrong-guesses").innerText += letter;
        document.querySelector("#wrong-guesses").innerText += " ";
        numWrong++;
        document.querySelector("#shark-img").src = `static/images/guess${numWrong}.png`;
      }

      // Disable the button so user doesn't accidentally guess the same letter twice
      clickedButton.disabled = true;

      // Check if game is over
    
      const allLettersGuessed = isAllLettersGuessed();
      for (let i = 0; i < word.length; i++) {
        if (document.querySelectorAll("#word-container div")[i].innerText === "") {
          allLettersGuessed = true;
        }
        else {
          allLettersGuessed = false;
        }
      }    

      if (numWrong === 5 || allLettersGuessed) {
        document.querySelector("#play-again").innerText =
          numWrong === 5
            ? "The shark got you! Click here to play again."
            : "You won! Click here to play again.";
        endGame();
        
      }
    });
  });
})();

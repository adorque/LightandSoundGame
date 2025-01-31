//Add your global variables here
// let pattern = [2, 2, 4, 3, 2, 1, 2, 4]; //keeps track of secret pattern
let pattern = new Array(8);
let progress = 0; // keeps track of current game progress
let gamePlaying = false; // keeps track of game state
let score = 0;
let highScores = new Array(3); //keeps track of top 3 scores from current session

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

//Sound
let tonePlaying = false;
let volume = 0.5;
//TODO: Add sounds for winning and losing game

let clueHoldTime = 1000;
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

let guessCounter = 0;


// Add your functions here

function startGame() {
  randSequence(pattern);
  console.log(pattern);
  progress = 0;
  gamePlaying = true;
  score = 0;

  //swap start and stop buttons
  startBtn.classList.add("hidden");
  stopBtn.classList.remove("hidden");

  playClueSequence();
}

function stopGame() {
  gamePlaying = false;

  //swap start and stop buttons
  startBtn.classList.remove("hidden");
  stopBtn.classList.add("hidden");

}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit")
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit")
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  context.resume()
  let delay = nextClueWaitTime;
  guessCounter = 0;
  for (let i = 0; i <= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue, delay, pattern[i])
    delay += clueHoldTime
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  newHighScore(score);
  alert("Game Over! :(((");
}

function winGame() {
  stopGame();
  newHighScore(score);
  alert("You Won!! :D");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  if (btn == pattern[guessCounter]) {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        playClueSequence();

        //Score multiplier of 20%
        score += (1000 * 0.2) * (guessCounter + 1);
        document.getElementById("scoreDisplay").textContent = score;

      }
    } else {
      guessCounter++;
    }
  } else {
    loseGame();
  }

}

function randSequence(pattern) { //randomizes the pattern
  for (let i = 0; i < 8; i++) {
    pattern[i] = Math.floor(Math.random() * 4) + 1;
  }
}

function newHighScore(score) { //checks if new high score can be added to array
  for (let i = highScores.length - 1; i >= 0; i++) {
    if (!highScores.hasOwnProperty(i) || score > highScores[i]) {
      highScores[i] = score;
      highScores.sort(function(a, b) { return b - a });
      console.log("High Scores: " + highScores);

      //display scores
      displayScores();
      return true;
    }
  }
}

function displayScores() {
  let scoreList = document.getElementById("scoreList");
  if (!scoreList) {
    console.error("Element with id 'scoreList' not found");
    return;
  }

  scoreList.innerHTML = "";
  console.log(highScores);
  let i = 1;

  highScores.forEach(score => {
    let row = `<tr>
      <td>${i}</td>
      <td>${score !== undefined ? score : "-"}</td>
    </tr>`;
    scoreList.innerHTML += row;
    i++;
  });

}


// Sound Synthesis Functions for Steps 6-8
// You do not need to edit the below code
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}
function playTone(btn, len) {
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function() {
    stopTone()
  }, len)
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
let AudioContext = window.AudioContext || window.webkitAudioContext
let context = new AudioContext()
let o = context.createOscillator()
let g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0, context.currentTime)
o.connect(g)
o.start(0)
//Add your global variables here
let pattern = [2, 2, 4, 3, 2, 1, 2, 4]; //keeps track of secret pattern
let progress = 0; // keeps track of current game progress
let gamePlaying = false; // keeps track of game state

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

//Sound
let tonePlaying = false;
let volume = 0.5;

let clueHoldTime = 1000;
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

let guessCounter = 0;


// Add your functions here

function startGame(){
  progress = 0;
  gamePlaying = true;

  //swap start and stop buttons
  startBtn.classList.add("hidden");
  stopBtn.classList.remove("hidden");

  playClueSequence();
}

function stopGame(){
  gamePlaying = false;

  //swap start and stop buttons
  startBtn.classList.remove("hidden");
  stopBtn.classList.add("hidden");

}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence() {
  context.resume()
  let delay = nextClueWaitTime;
  guessCounter = 0;
  for(let i=0;i<=progress;i++){
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i])
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over! :(((");
}

function winGame() {
  stopGame();
  alert("You Won!! :D");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  if (btn == pattern[guessCounter]){
    if (guessCounter == progress){
      if (progress == pattern.length - 1){
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    loseGame();
  }
  
}



// Sound Synthesis Functions for Steps 6-8
// You do not need to edit the below code
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
let AudioContext = window.AudioContext || window.webkitAudioContext 
let context = new AudioContext()
let o = context.createOscillator()
let g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
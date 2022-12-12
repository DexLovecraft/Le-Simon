// Declaration of variables 

let userSequenceInput = [] // user input list
let sequenceAnswer = [] // list to compare with input
let red = document.getElementById('red')
let green = document.getElementById('green')
let yellow = document.getElementById('yellow')
let blue = document.getElementById('blue')
let buttons = document.getElementsByClassName('button') // DOM element useful fot functions
let roundStep = 3 
let numberOfClick = -1
let score = 0
let check = false
let numberOfsequence = 0
let highscore = 0
// game mechanics variable 

//functions declaration

// Function to random a list of number, push into sequenceAnswer
const getRandomInt = (max) => {
    return sequenceAnswer.push(Math.floor(Math.random() * max));   
} 

// Function who flash button with the random generated number
const randomFlash = (index) => {
    setTimeout(() => {
      buttons[sequenceAnswer[index]].classList.toggle('button--light')
        setTimeout(() =>{
          buttons[sequenceAnswer[index]].classList.toggle('button--light')
        },600)
      }, 1150 * index + 1)
  }


  // Trigger function to the game who check in which phase of game user is 
const newGame = (roundStep) => {
    if (roundStep <= 3){
      sequenceAnswer = []
        for(i = 0; i != 3; i++){
            getRandomInt(4)
        }
        //console.log('depart '+ sequenceAnswer)
        sequence(sequenceAnswer)
        
    }
    else if (roundStep > 7){
        replay()
    }
    else{
        getRandomInt(4)
        //console.log('etape +1 '+ sequenceAnswer)
        sequence(sequenceAnswer)
    }
}

//function that call random Flash and after lauch the game
const sequence = (list) => {
    for (nbr in list){
        randomFlash(nbr)
    }
    setTimeout(() => {
       game(i)
    },1100 * roundStep)
}

//series of four function who do the same, they enlight the respective button, push they're index into userSequenceInput and trigger The verifcation function
 const redClick = () => {
      red.classList.toggle('button--light')
      red.classList.toggle('button--press')
    setTimeout(() =>{
      red.classList.toggle('button--light')
      red.classList.toggle('button--press')
    },200)
    userSequenceInput.push(0)
    numberOfClick = numberOfClick + 1

    if(sequenceAnswer[numberOfClick] !== userSequenceInput[numberOfClick]){
      roundStep = 3
      numberOfClick = -1
      lose()
    }
    else if(userSequenceInput.length == roundStep){
      if(userSequenceInput.every((value, index) => value === sequenceAnswer[index])){
        numberOfClick = -1
        roundStep = roundStep + 1
        win()
      }
      else{
        roundStep = 3
        numberOfClick = -1
        lose()
      }
    }
    
}

 const yellowClick = () => {
    yellow.classList.toggle('button--light')
    yellow.classList.toggle('button--press')
    setTimeout(() =>{
      yellow.classList.toggle('button--light')
      yellow.classList.toggle('button--press')
    },200)
    userSequenceInput.push(1)
    numberOfClick = numberOfClick + 1

    if(sequenceAnswer[numberOfClick] !== userSequenceInput[numberOfClick]){
      roundStep = 3
      numberOfClick = -1
      lose()
    }
    else if(userSequenceInput.length == roundStep){
      if(userSequenceInput.every((value, index) => value === sequenceAnswer[index])){
        numberOfClick = -1
        roundStep = roundStep + 1
        win()
      }
      else{
        roundStep = 3
        numberOfClick = -1
        lose()
      }
    }
}

 const blueClick = () => {
    blue.classList.toggle('button--light')
    blue.classList.toggle('button--press')
    setTimeout(() =>{
      blue.classList.toggle('button--light')
      blue.classList.toggle('button--press')
    },200)
    userSequenceInput.push(2)
    numberOfClick = numberOfClick + 1

    if(sequenceAnswer[numberOfClick] !== userSequenceInput[numberOfClick]){
      roundStep = 3
      numberOfClick = -1
      lose()
    }
    else if(userSequenceInput.length == roundStep){
      if(userSequenceInput.every((value, index) => value === sequenceAnswer[index])){
        numberOfClick = -1
        roundStep = roundStep + 1
        win()
      }
      else{
        roundStep = 3
        numberOfClick = -1
        lose()
      }
    }
}

const greenClick = () => {
    green.classList.toggle('button--light')
    green.classList.toggle('button--press')
    setTimeout(() =>{
      green.classList.toggle('button--light')
      green.classList.toggle('button--press')
    },200)
    userSequenceInput.push(3)
    numberOfClick = numberOfClick + 1

    if(sequenceAnswer[numberOfClick] !== userSequenceInput[numberOfClick]){
      roundStep = 3
      numberOfClick = -1
      lose()
    }
    else if(userSequenceInput.length == roundStep){
      if(userSequenceInput.every((value, index) => value === sequenceAnswer[index])){
        numberOfClick = -1
        roundStep = roundStep + 1
        win()
      }
      else{
        roundStep = 3
        numberOfClick = -1
        lose()
      }
    }
}


//the two function if the user win or lose at the game. that flash the background in function and they both trigger newGame but with different reinit. 
const lose = () => {
  eventRemover()
  document.getElementsByClassName('background')[0].classList.toggle('background--false')
  setTimeout(() =>{
      document.getElementsByClassName('background')[0].classList.toggle('background--false')
    },300)
    userSequenceInput = []
   sequenceAnswer = []
   if(score > highscore){
    highscore = score
   }
   score = 0 
   numberOfsequence = 0
   scoreDisplay()
   setTimeout(() => {
    newGame(roundStep)
  },1500)
}

const win = () => {
  eventRemover()
    document.getElementsByClassName('background')[0].classList.toggle('background--true')
    setTimeout(() =>{
      document.getElementsByClassName('background')[0].classList.toggle('background--true')
    },300)
    userSequenceInput = []
    score = (score + (100 * (roundStep - 1)))
    scoreDisplay()
    setTimeout(() => {
      newGame(roundStep)
    },1500)
}

//after user reach seven good input in a row, this function restart the game at three step with addition of score.
const replay = () => {
  roundStep = 3
  score = score * 2
  numberOfsequence = numberOfsequence + 1 
  scoreDisplay()
  userSequenceInput = []
  sequenceAnswer = []
  setTimeout(() => {
    newGame(roundStep)
  },1500)
} 

const game = () => {
  // independant event for removal later
  red.addEventListener('click', redClick)
  yellow.addEventListener('click', yellowClick)
  blue.addEventListener('click', blueClick)
  green.addEventListener('click', greenClick)
}

const eventRemover = () => {
  red.removeEventListener('click', redClick)
  yellow.removeEventListener('click', yellowClick)
  blue.removeEventListener('click', blueClick)
  green.removeEventListener('click', greenClick)
}

//Display scdore on web page
const scoreDisplay = () => {
  document.getElementsByClassName('score__number')[0].innerHTML = score
  document.getElementsByClassName('step__number')[0].innerHTML = numberOfsequence
  document.getElementsByClassName('highscore__number')[0].innerHTML = highscore
} 

//launch of new game
setTimeout(() => {
  newGame(roundStep)
}, 2000)


// compariason en cours de jeux + verification dans les event 
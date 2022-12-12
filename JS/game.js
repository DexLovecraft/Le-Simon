// Declaration of variables 

let userSequenceInput = [] // user input list
let sequenceAnswer = [] // list to compare with input
let red = document.getElementById('red')
let green = document.getElementById('green')
let yellow = document.getElementById('yellow')
let blue = document.getElementById('blue')
let btn = document.getElementsByClassName('button') // DOM element useful fot functions
let step = 3 
let score = 0
let check = false
let numberOfsequence = 0
let highscore = 0
// game mechanics variable 

//functions declaration

// Function to random a list of number, push into colorList
const getRandomInt = (max) => {
    return colorList.push(Math.floor(Math.random() * max));   
} 

// Function who flash button with the random generated number
const randomFlash = (index) => {
    setTimeout(() => {
        btn[colorList[index]].classList.toggle('button--light')
        setTimeout(() =>{
          btn[colorList[index]].classList.toggle('button--light')
        },600)
      }, 1150 * index + 1)
  }


  // Trigger function to the game who check in which phase of game user is 
const newGame = (step) => {
    if (step <= 3){
        colorList = []
        for(i = 0; i != 3; i++){
            getRandomInt(4)
        }
        //console.log('depart '+ colorList)
        sequence(colorList)
        
    }
    else if (step > 7){
        replay()
    }
    else{
        getRandomInt(4)
        //console.log('etape +1 '+ colorList)
        sequence(colorList)
    }
}

//function that call random Flash and after lauch the game
const sequence = (list) => {
    for (nbr in list){
        randomFlash(nbr)
    }
    setTimeout(() => {
       game(i)
    },1100 * step)
}

//series of four function who do the same, they enlight the respective button, push they're index into pressValue and trigger The verifcation function
 const redClick = () => {
      red.classList.toggle('button--light')
      red.classList.toggle('button--press')
    setTimeout(() =>{
      red.classList.toggle('button--light')
      red.classList.toggle('button--press')
    },200)
    pressValue.push(0)
    if(pressValue.length == step){
      //console.log('pret pour verif')
      //console.log(pressValue)
      Verif()
    }
}

 const yellowClick = () => {
    yellow.classList.toggle('button--light')
    yellow.classList.toggle('button--press')
    setTimeout(() =>{
      yellow.classList.toggle('button--light')
      yellow.classList.toggle('button--press')
    },200)
    pressValue.push(1)
    if(pressValue.length == step){
      //console.log('pret pour verif')
      //console.log(pressValue)
      Verif()
    }
}

 const blueClick = () => {
    blue.classList.toggle('button--light')
    blue.classList.toggle('button--press')
    setTimeout(() =>{
      blue.classList.toggle('button--light')
      blue.classList.toggle('button--press')
    },200)
    pressValue.push(2)
    if(pressValue.length == step){
      //console.log('pret pour verif')
      //console.log(pressValue)
      Verif()
    }
}

const greenClick = () => {
    green.classList.toggle('button--light')
    green.classList.toggle('button--press')
    setTimeout(() =>{
      green.classList.toggle('button--light')
      green.classList.toggle('button--press')
    },200)
    pressValue.push(3)
    if(pressValue.length == step){
      //console.log('pret pour verif')
      //console.log(pressValue)
      Verif()
    }
}


//the two function if the user win or lose at the game. that flash the background in function and they both trigger newGame but with different reinit. 
const lose = () => {
  document.getElementsByClassName('background')[0].classList.toggle('background--false')
  setTimeout(() =>{
      document.getElementsByClassName('background')[0].classList.toggle('background--false')
    },300)
   pressValue = []
   colorList = []
   if(score > highscore){
    highscore = score
   }
   score = 0 
   numberOfsequence = 0
   scoreDisplay()
   setTimeout(() => {
    newGame(step)
  },1500)
}

const win = () => {
    document.getElementsByClassName('background')[0].classList.toggle('background--true')
    setTimeout(() =>{
      document.getElementsByClassName('background')[0].classList.toggle('background--true')
    },300)
    pressValue = []
    score = (score + (100 * (step - 1)))
    scoreDisplay()
    setTimeout(() => {
      newGame(step)
    },1500)
}

//after user reach seven good input in a row, this function restart the game at three step with addition of score.
const replay = () => {
  step = 3
  score = score * 2
  numberOfsequence = numberOfsequence + 1 
  scoreDisplay()
  pressValue = []
  colorList = []
  setTimeout(() => {
    newGame(step)
  },1500)
} 

const game = () => {
  // independant event for removal later
  red.addEventListener('click', redClick)
  yellow.addEventListener('click', yellowClick)
  blue.addEventListener('click', blueClick)
  green.addEventListener('click', greenClick)
}

const Verif = () => {
  // remove of event
  red.removeEventListener('click', redClick)
  yellow.removeEventListener('click', yellowClick)
  blue.removeEventListener('click', blueClick)
  green.removeEventListener('click', greenClick)
  // verification of input and outputt
  check = false

  for (let i = 0 ; i < pressValue.length + 1; i++){
    if(pressValue.every((value, index) => value === colorList[index])){ // this if is for array comparaison
      ok = true
    }
    else{
      ok = false
    }
  }
  if(ok == true){
    step = step + 1
    win()
  }
  else if(ok == false){
    step = 3
    lose()
  }
}

//Display scdore on web page
const scoreDisplay = () => {
  document.getElementsByClassName('score__number')[0].innerHTML = score
  document.getElementsByClassName('step__number')[0].innerHTML = numberOfsequence
  document.getElementsByClassName('highscore__number')[0].innerHTML = highscore
} 

//launch of new game
setTimeout(() => {
  newGame(step)
}, 2000)


// compariason en cours de jeux + verification dans les event 
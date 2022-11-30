let btn = document.getElementsByClassName('button')
let pressValue = []
let colorList = []
let score = 0
let gameStep = 3

const getRandomInt = (max) => {
    return colorList.push(Math.floor(Math.random() * max));
    
}

const randomFlash = (number) => {
  setTimeout(() => {
      btn[colorList[number]].classList.toggle('button--light')
      setTimeout(() =>{
        btn[colorList[number]].classList.toggle('button--light')
      },600)
    }, 1150 * number + 1)
}

const newGame = () => {
  for (let i = 0; i != gameStep ; i++){
    getRandomInt(4)
    randomFlash(i)
  }
    console.log(colorList)
}

const lose = () => {
  document.getElementsByClassName('background')[0].classList.toggle('background--false')
  setTimeout(() =>{
      document.getElementsByClassName('background')[0].classList.toggle('background--false')
    },300)
   pressValue = []
   colorList = []
    score = 0
    gameStep = 3
    console.log(gameStep)
    newGame()
}

newGame()

const Game = (number, gamestepnum) => {
    btn[number].addEventListener('click', (e) => {
        btn[number].classList.toggle('button--light')
      setTimeout(() =>{
        btn[number].classList.toggle('button--light')
      },300)
      pressValue.push(number)
      if (pressValue.length == gamestepnum){
        if (colorList[gamestepnum - 1] == pressValue[gamestepnum - 1]){
          document.getElementsByClassName('background')[0].classList.toggle('background--true')
          setTimeout(() =>{
              document.getElementsByClassName('background')[0].classList.toggle('background--true')
            },300)
            score = score * 2 
          setTimeout(() =>  {
              pressValue = []
              colorList = []
              newGame()
          }, 1000) 
          gameStep = gameStep + 1  
        }
        else{
          lose()
        }
      }

      for(let i = 0; i < gamestepnum; i++) {
      if (pressValue.length == (i +1))
          if (colorList[i] == pressValue[i]){
                score = score + 100
           }
          else{
             lose()
          }
      }
        document.getElementsByClassName('score__number')[0].innerHTML = score
        console.log(gamestepnum + 'debut detape')
        console.log(gameStep + 'etape globale')
    })
}

for (let i = 0; i < 4; i++) {
    Game(i, gameStep)
}
let btn = document.getElementsByClassName('button')
let pressValue = []
let colorList = []
let score = 0

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
    getRandomInt(4)
    getRandomInt(4)
    getRandomInt(4)
    randomFlash(0)
    randomFlash(1)
    randomFlash(2)
}


newGame()
console.log(colorList)

const Game = (number) => {
    console.log(colorList)
    btn[number].addEventListener('click', (e) => {
        btn[number].classList.toggle('button--light')
      setTimeout(() =>{
        btn[number].classList.toggle('button--light')
      },300)
      pressValue.push(number)
      console.log(pressValue)
        if (pressValue.length == 1)
            if (colorList[0] == pressValue[0]){
                  score = score + 100
            }
            else{
                document.getElementsByClassName('background')[0].classList.toggle('background--false')
                setTimeout(() =>{
                    document.getElementsByClassName('background')[0].classList.toggle('background--false')
                  },300)
                pressValue = []
                colorList = []
                score = 0
                newGame()
            }
        if (pressValue.length == 2)
            if (colorList[1] == pressValue[1]){
                  score = score + 200
            }
            else{
                document.getElementsByClassName('background')[0].classList.toggle('background--false')
                setTimeout(() =>{
                    document.getElementsByClassName('background')[0].classList.toggle('background--false')
                  },300)
                pressValue = []
                colorList = []
                score = 0
                newGame()
            }
        if (pressValue.length == 3)
            if (colorList[2] == pressValue[2]){
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
            }
            else{
                document.getElementsByClassName('background')[0].classList.toggle('background--false')
                setTimeout(() =>{
                    document.getElementsByClassName('background')[0].classList.toggle('background--false')
                  },300)
                pressValue = []
                colorList = []
                score = 0
                newGame()
            }
        document.getElementsByClassName('score__number')[0].innerHTML = score
    })
}

for (let i = 0; i < 4; i++) {
    Game(i)
}


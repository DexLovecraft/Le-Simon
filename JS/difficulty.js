let easyButton = document.getElementById('easy')
let mediumButton = document.getElementById('medium')
let hardButton = document.getElementById('hard')

//window.location.assign("https://www.example.com");

const easyMode = () => {
    easyButton.classList.toggle('button--press')
     setTimeout(() => {
        easyButton.classList.toggle('button--press')
        window.location.assign("./Public/pages/easy.html")
     }, 300)
}

const mediumMode = () => {
    mediumButton.classList.toggle('button--press')
     setTimeout(() => {
        mediumButton.classList.toggle('button--press')
        window.location.assign("./Public/pages/medium.html")
     }, 300)
     
}

const hardMode = () => {
    hardButton.classList.toggle('button--press')
     setTimeout(() => {
        hardButton.classList.toggle('button--press')
        window.location.assign("./Public/pages/hard.html")
     }, 300)
}

const eventTrigger = () => {
    if (easyButton !== null){
        easyButton.addEventListener('click', easyMode)
    }
    if (mediumButton !== null){
        mediumButton.addEventListener('click', mediumMode)
    }
    if (hardButton !== null){
        hardButton.addEventListener('click', hardMode)
    }
}

eventTrigger()
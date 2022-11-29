let btn = document.getElementsByClassName('button')

btn[0].addEventListener('click', (e) => {
    btn[0].classList.toggle('button--light')
    setTimeout(() =>{
        btn[0].classList.toggle('button--light')
    },300)
});

btn[1].addEventListener('click', (e) => {
    btn[1].classList.toggle('button--light')
    setTimeout(() =>{
        btn[1].classList.toggle('button--light')
    },300)
});

btn[2].addEventListener('click', (e) => {
    btn[2].classList.toggle('button--light')
    setTimeout(() =>{
        btn[2].classList.toggle('button--light')
    },300)
});

btn[3].addEventListener('click', (e) => {
    btn[3].classList.toggle('button--light')
    setTimeout(() =>{
        btn[3].classList.toggle('button--light')
    },300)
});

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }
  

  setTimeout(() => {
    let rdm = getRandomInt(4)
    btn[rdm].classList.toggle('button--light')
    setTimeout(() =>{
        btn[rdm].classList.toggle('button--light')
    },600)
    console.log(rdm)
  }, 1500)

  setTimeout(() => {
    let rdm = getRandomInt(4)
    btn[rdm].classList.toggle('button--light')
    setTimeout(() =>{
        btn[rdm].classList.toggle('button--light')
    },600)
    console.log(rdm)
  }, 3000)

  setTimeout(() => {
    let rdm = getRandomInt(4)
    btn[rdm].classList.toggle('button--light')
    setTimeout(() =>{
        btn[rdm].classList.toggle('button--light')
    },600)
    console.log(rdm)
  }, 4500)
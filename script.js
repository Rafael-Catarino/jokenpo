const comput = ['pedra', 'papel', 'tesoura'];

const h1Result = document.querySelector('.winner');
const btnsPlay = document.querySelectorAll('.btn__option');
const yourAnswer = document.querySelector('.your__answer');
const imgYourAnswer = document.createElement('img');
const yourP = document.querySelector('.player__result');
const computerAnswer = document.querySelector('.computer__answer');
const imgComputerAnswer = document.createElement('img');
const computerP = document.querySelector('.computer__result');

const startGame = () => {
  const result = event.target.alt;
  checkComputerResponse();
  checkYourAnswer();
  createYourAnswer(result);
  computerPlaying(result);
}

const btnStartGame = () => {
  for (let i = 0; i < btnsPlay.length; i++) {
    btnsPlay[i].addEventListener('click', startGame);
  }
}

btnStartGame();


//Refatorandoo código
/* const bntStone = document.querySelector('#bnt-stone');
bntStone.addEventListener('click', () => {
  checkComputerResponse();
  checkYourAnswer();
  yourAnswer('pedra');
  computerPlaying('pedra');
}); */

function checkComputerResponse() {
  const btnComputerAnswe = document.querySelector('.computer__answer');
  const imgComputerAnswer = btnComputerAnswe.querySelector('img');
  if (imgComputerAnswer) imgComputerAnswer.remove();
}

function checkYourAnswer() {
  const btnYourAnswe = document.querySelector('.your__answer');
  const imgYourAnswer = btnYourAnswe.querySelector('img');
  if (imgYourAnswer) imgYourAnswer.remove();
}

// Refatorando o código
/* const btnPaper = document.querySelector('#btn-paper');
btnPaper.addEventListener('click', () => {
  checkComputerResponse();
  checkYourAnswer();
  yourAnswer('papel');
  computerPlaying('papel');
}); */

/* const btnScissors = document.querySelector('#btn-scissors');
btnScissors.addEventListener('click', () => {
  checkComputerResponse();
  checkYourAnswer();
  yourAnswer('tesoura');
  computerPlaying('tesoura');
}); */

function computerPlaying(result) {
  const num = Math.floor(Math.random() * 3);
  createComputerAnswer(num);
  gameResult(num, result);
}

//Refatorando o código.
/* function yourAnswer(result) {
  const yourAnswer = document.querySelector('.your__answer');
  const imgYourAnswer = document.createElement('img');
  const yourP = document.querySelector('.player__result');
  if (result === 'pedra') {
    imgYourAnswer.src = "fotos/pedra.jpg";
    imgYourAnswer.classList.add("imgYourAnswer");
    yourAnswer.appendChild(imgYourAnswer);
    yourP.innerHTML = 'Você escolheu PEDRA!'

  } else if (result === 'papel') {
    imgYourAnswer.src = "fotos/papel.jpg";
    imgYourAnswer.classList.add("imgYourAnswer");
    yourAnswer.appendChild(imgYourAnswer);
    yourP.innerHTML = 'Você escolheu PAPEL!'

  } else if (result === 'tesoura') {
    imgYourAnswer.src = "fotos/tesoura.jpg";
    imgYourAnswer.classList.add("imgYourAnswer");
    yourAnswer.appendChild(imgYourAnswer);
    yourP.innerHTML = 'Você escolheu TESOURA!'
  }
} */

function createYourAnswer(result) {
  if (result === 'pedra') {  
    enteringYourAnswer(result);
  } else if (result === 'papel') {
    enteringYourAnswer(result);
  } else if (result === 'tesoura') {
    enteringYourAnswer(result);
  }
}

function enteringYourAnswer(result) {
  imgYourAnswer.src = `fotos/${result}.jpg`;
  imgYourAnswer.classList.add("imgYourAnswer");
  yourAnswer.appendChild(imgYourAnswer);
  yourP.innerHTML = `Você escolheu ${result.toUpperCase()}!`
}


//Refatorandoo código
/* function computerAnswer(result) {
  const computerAnswer = document.querySelector('.computer__answer');
  const imgComputerAnswer = document.createElement('img');
  const computerP = document.querySelector('.computer__result');
  if (comput[result] === 'pedra') {
    imgComputerAnswer.src = "fotos/pedra.jpg";
    imgComputerAnswer.classList.add("imgComputerAnswer");
    computerAnswer.appendChild(imgComputerAnswer);
    computerP.innerHTML = 'Computador escolheu PEDRA';

  } else if (comput[result] === 'papel') {
    imgComputerAnswer.src = "fotos/papel.jpg";
    imgComputerAnswer.classList.add("imgComputerAnswer");
    computerAnswer.appendChild(imgComputerAnswer);
    computerP.innerHTML = 'Computador escolheu PAPEL';

  } else if (comput[result] === 'tesoura') {
    imgComputerAnswer.src = "fotos/tesoura.jpg";
    imgComputerAnswer.classList.add("imgComputerAnswer");
    computerAnswer.appendChild(imgComputerAnswer);
    computerP.innerHTML = 'Computador escolheu TESOURA';
  }
} */

function createComputerAnswer(result) {
  if (comput[result] === 'pedra') {
    enteringComputerAnswer('pedra');
  } else if (comput[result] === 'papel') {
    enteringComputerAnswer('papel');
  } else if (comput[result] === 'tesoura') {
    enteringComputerAnswer('tesoura');
  }
}

function enteringComputerAnswer(result) {
  imgComputerAnswer.src = `fotos/${result}.jpg`;
  imgComputerAnswer.classList.add("imgComputerAnswer");
  computerAnswer.appendChild(imgComputerAnswer);
  computerP.innerHTML = `Computador escolheu ${result.toUpperCase()}`;
}


/* let contComputer = 0;
let contYour = 0;
function gameResult(computResult, yourResult) {
  const h1Result = document.querySelector('.winner');
  if (comput[computResult] === 'pedra' && yourResult === 'pedra') {
    h1Result.innerHTML = 'EMPATOU!!!';
  } else if ((comput[computResult] === 'pedra') && (yourResult === 'papel')) {
    h1Result.innerHTML = 'VOCÊ GANHOU!!!';
    contYour += 1;
    inputPoints(contComputer, contYour);
  } else if (comput[computResult] === 'pedra' && yourResult === 'tesoura') {
    h1Result.innerHTML = 'VOCÊ PERDEU!!!';
    contComputer += 1;
    inputPoints(contComputer, contYour);
  } else if (comput[computResult] === 'papel' && yourResult === 'pedra') {
    h1Result.innerHTML = 'VOCÊ PERDEU!!!';
    contComputer += 1
    inputPoints(contComputer, contYour);
  } else if (comput[computResult] === 'papel' && yourResult === 'papel') {
    h1Result.innerHTML = 'EMPATOU!!!';
  } else if (comput[computResult] === 'papel' && yourResult === 'tesoura') {
    h1Result.innerHTML = 'VOCÊ GANHOU!!!';
    contYour += 1;
    inputPoints(contComputer, contYour);
  } else if (comput[computResult] === 'tesoura' && yourResult === 'pedra') {
    h1Result.innerHTML = 'VOCÊ GANHOU!!!';
    contYour += 1;
    inputPoints(contComputer, contYour);
  } else if (comput[computResult] === 'tesoura' && yourResult === 'papel') {
    h1Result.innerHTML = 'VOCÊ PERDEU!!!';
    contComputer += 1
    inputPoints(contComputer, contYour);
  } else if (comput[computResult] === 'tesoura' && yourResult === 'tesoura') {
    h1Result.innerHTML = 'EMPATOU!!!';
  }
} */

let contComputer = 0;
let contYour = 0;
function gameResult(computResult, yourResult) {
  if (comput[computResult] === 'pedra' && yourResult === 'pedra') {
    h1Result.innerHTML = 'EMPATOU!!!';
  } else if ((comput[computResult] === 'pedra') && (yourResult === 'papel')) {
    winningPlayer();
  } else if (comput[computResult] === 'pedra' && yourResult === 'tesoura') {
    winningComputer();
  } else if (comput[computResult] === 'papel' && yourResult === 'pedra') {
    winningComputer();
  } else if (comput[computResult] === 'papel' && yourResult === 'papel') {
    h1Result.innerHTML = 'EMPATOU!!!';
  } else if (comput[computResult] === 'papel' && yourResult === 'tesoura') {
    winningPlayer();
  } else if (comput[computResult] === 'tesoura' && yourResult === 'pedra') {
    winningPlayer();
  } else if (comput[computResult] === 'tesoura' && yourResult === 'papel') {
    winningComputer();
  } else if (comput[computResult] === 'tesoura' && yourResult === 'tesoura') {
    h1Result.innerHTML = 'EMPATOU!!!';
  }
}

function winningPlayer() {
  h1Result.innerHTML = 'VOCÊ GANHOU!!!';
  contYour += 1;
  inputPoints(contComputer, contYour);
}

function winningComputer() {
  h1Result.innerHTML = 'VOCÊ PERDEU!!!';
    contComputer += 1
    inputPoints(contComputer, contYour);
}

function cleanPlayer() {
  const btnClean = document.querySelector('.btn__clean');
  btnClean.addEventListener('click', () => {
    document.querySelector('.winner').innerHTML = '';
    document.querySelector('.computer__result').innerHTML = '';
    document.querySelector('.player__result').innerHTML = '';
    document.querySelector('.your__points').innerHTML = 0;
    document.querySelector('.computer__points').innerHTML = 0;
    document.querySelector('.imgComputerAnswer').remove();
    document.querySelector('.imgYourAnswer').remove();
    contComputer = 0;
    contYour = 0;
  });
}

cleanPlayer();

function inputPoints(contComputer, contYour) {
  const yourPoints = document.querySelector('.your__points');
  yourPoints.innerHTML = contYour;
  const computerPoints = document.querySelector('.computer__points');
  computerPoints.innerHTML = contComputer;
}

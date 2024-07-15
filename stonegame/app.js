const startbtncon = document.getElementById("startbtn");

const ROCK = 'ROCK';
const SCISSOR = 'SCISSOR';
const PAPER = 'PAPER';
const DRAW = 'DRAW';
const PLAYER_WIN = 'PLAYER_WIN';
const COMPUTER_WIN = 'COMPUTER_WIN';
let pChosen;
let cChosen;

function computerChoiseSelection(){
    const cChosenNumber= Math.random();
    if(cChosenNumber <=0.33 ){
        cChosen = ROCK;
    }
    else if(cChosenNumber <= 0.66){
        cChosen = PAPER;
    }
    else {
        cChosen = SCISSOR;
    }
    console.log(cChosenNumber);
    console.log(cChosen);
    return cChosen;
}

function winningDeclaration(pChosen, cChosen){
    if (pChosen == cChosen){
        return DRAW;
    }
    if(pChosen == ROCK && cChosen == SCISSOR || pChosen == SCISSOR && cChosen == PAPER || pChosen == PAPER && cChosen == ROCK){
        return PLAYER_WIN;
    }
    else{
        return COMPUTER_WIN;
    }
}

function startgame(){
    console.log('game is starting');
    const playerSelection = document.getElementById('pchoice').value.toUpperCase();
    // console.log(playerSelection);
    if(playerSelection != ROCK && playerSelection != SCISSOR && playerSelection != PAPER){
        alert('you have not chosen the proper option hence we chose you rock');
        pChosen = ROCK;
    }
    else{
        pChosen=playerSelection;
    }
    console.log(pChosen);
    let cChosen = computerChoiseSelection();
    let message = '';
    let finalResult = winningDeclaration(pChosen,cChosen);
    if (finalResult == DRAW){
        message = message + 'Match is draw';
    }
    else if (finalResult == COMPUTER_WIN){
        message =  message + 'Computer won';
    }
    else {
        message =  message + 'You won !!!';
    }
    document.getElementById('output').textContent = message;
    document.getElementById('output').style.color = 'red';
    document.getElementById('pchoiceenter').textContent = pChosen;
    document.getElementById('pchoiceenter').style.color = 'red';
    document.getElementById('cchoiceenter').textContent = cChosen;
    document.getElementById('cchoiceenter').style.color = 'red';
    
    // document.getElementById('output').style.color = 'red';
        
}

startbtncon.addEventListener('click', startgame);

//1-Crear una funcion que genere un valor random del 1 al tres.
/*2- Condicion que devuelva un string de Rock, paper o scissors si el valor
introducido es igual a la condicion.*/
//3-Crear variable que almacene un valor string introducida por teclado.
/*4-Comparar ambos valores dandole propiedad a las reglas del juego y que retorne
quien es el ganador y acomulando puntos para  cada ganador .*/
/*5- hacer que el juego tengo un maximo de 5 rondas le agregara que el que gane 
tres rondas es el campo.*/
//6- al finalizar el juego que pregunte si quiere jugar otras vez o no ugar mas.


function getcomputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    console.log(randomNumber)
    if (randomNumber===1) return "paper";
    else if(randomNumber===2) return "rock";
    return "scissors";
}

function getHumanChoice() {
    let choice = prompt("Play Rock, Paper o Scissors");
    while(!(choice.localeCompare("rock",undefined,{sensitivity: 'accent'})===0 ||
    choice.localeCompare("paper",undefined,{sensitivity: 'accent'})===0||
    choice.localeCompare("scissors",undefined,{sensitivity: 'accent'})===0)){
        choice = prompt("Enter Rock, Paper o Scissors, please.") ;
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    
    humanChoice = humanChoice.toLowerCase();
    if((humanChoice==="scissors" && computerChoice==="paper")||
    (humanChoice==="paper" && computerChoice==="rock")||
    (humanChoice==="rock" && computerChoice==="scissors")){
        console.log(`You won,${humanChoice} beats ${computerChoice}}`);
       return true;
    }else if (humanChoice===computerChoice){
        console.log("Empate");
    } else {
        console.log(`You lost,${computerChoice} beats ${humanChoice}}`);
        return false;
    }
}

function playGame(){

let humanScore = 0;
let computerScore = 0;

for(let i=1;i < 6;i++){

const humanSelection = getHumanChoice();
const computerSelection = getcomputerChoice();

let returned =playRound(humanSelection,computerSelection);

if(returned) ++humanScore;
else if(returned==false) ++computerScore;

}
if(humanScore<computerScore) console.log("The computer is the winner");
else if(computerScore<humanScore) console.log("You are the winner");
else console.log("It's a tie");

confirm("Would you like play again?")? playGame():console.log("Game Over");

}

playGame();


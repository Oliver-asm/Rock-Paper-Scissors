
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
    if(humanChoice!== undefined){
    const result = document.querySelector("#boxResults");
    const para = document.createElement("p");
    let choise;
    humanChoice = humanChoice.toLowerCase();
    if((humanChoice==="scissors" && computerChoice==="paper")||
    (humanChoice==="paper" && computerChoice==="rock")||
    (humanChoice==="rock" && computerChoice==="scissors")){
        para.textContent = `You won,${humanChoice} beats ${computerChoice}`;
        choise = true;
    }else if (humanChoice===computerChoice){
        para.textContent = "Tie";
    } else {
        para.textContent = `You lost,${computerChoice} beats ${humanChoice}`;
        choise = false;
    }

    result.appendChild(para);
    return choise;
    
}
}

let machinWin = 0;
let humanWin = 0;

const buttonContainer = document.querySelector(".buttons");
buttonContainer.addEventListener("click",(event)=> {
    let humanChoice = event.target.value;
    let computerChoice = getcomputerChoice();
    let finalResult = playRound(humanChoice, computerChoice);

    if(finalResult=== true) humanWin++;
    if(finalResult===false) machinWin++;

    winner(machinWin,humanWin);
    
});

function winner(machinPoint,humanPoint) {
    if(humanPoint === 5) {
        const para = document.createElement("p");
        const result = document.querySelector("#boxResults");
        para.textContent = "You are the final winner!";
        para.style.backgroundColor="green";
        para.style.color="white";
        para.style.fontSize = "20px";
        result.appendChild(para);
        machinWin= 0;
        humanWin = 0;
        
    } else if (machinPoint ===5){
        const para = document.createElement("p");
        const result = document.querySelector("#boxResults");
        para.textContent = "Machin is the final winner!";
        para.style.backgroundColor="red";
        para.style.color="white";
        para.style.fontSize = "20px";
        result.appendChild(para);
        machinWin= 0;
        humanWin = 0;
    }
}







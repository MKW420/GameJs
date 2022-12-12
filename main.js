const statusDisplay = document.querySelector('.status');

let GameActive = true;
let currentPlayer = "X"

//const player_O_Class = 'circle'
//const player_X_Class = 'X'
let gameState = ["","","","","","","","",""]

const WinningMessage = () => `Player ${currentPlayer} has won!`
const drawMessage = () => `Game Ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHtml = currentPlayerTurn();


const winningConditions = [ 
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

]


function handleCellPlayed(ClickedCell, ClickedCellIndex){
    gameState[ClickedCellIndex] = currentPlayer;
    ClickedCell.innerHtml = currentPlayerTurn();
}

function handlePlayerChange(){
    currentPlayer = currentPlayer = "X" ? "O" : "X";
    statusDsiplay.innerHtml = currentPlayerTurn();



}

function handleResultValidation(){
    let roundWon = false;
   for(let i = 0 ; i <= 7 ; i ++){
    const winCondition = winningConditions[i];
    let a = gameState[winCondition[0]];
    let b = gameState[winCondition[1]];
    let c = gameState[winCondition[2]];
    
    if(a == "" || b === "" || c == "") {
      continue;
    }
    if (a === b && b === c){
        roundWon = true;
        break

    }
   }

   if(roundWon){
    statusDisplay.innerHTML = WinningMessage();
    gameActive = false;
    return;
   }

   let roundDraw = !gameState.includes("");
   if(roundDraw){
    statusDisplay.innerHTML = drawMessage();
    gameActive = false;
    return;
   }

   handlePlayerChange();
   

}


function handleCellClick(ClickedCellEvent){
    const clickedCell = ClickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if(gameState[clickedCellIndex]  !== "" || !gameActive){
      return;
    }
    handleCellPlayed(clickedCell, clickedCellIndex)
    handleResultValidation();

}

function handleRestartGame(){
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "","","","","",""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");

}


document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.restart').addEventListener('click', handleRestartGame);


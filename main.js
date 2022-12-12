
const player_O_Class = 'O'
const player_X_Class = 'X'


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

const cellElements = document.querySelectorAll('[data-cell]')
const boardElement =document.getElementsByClassName('container')
const restartbtn = document.getElementsByClassName('restart')
let isPlayer_O_Turn = false;

startGame();

restartbtn.addEventListener(click, startGame);



function startGame(){
    isPlayer_O_Turn = false;
    cellElements.forEach(cell => {
        cell.classList.remove(player_O_Class);
        cell.classList.remove(player_X_Class);
        cell.removeEventListener('click', handleCellClick);
        cell.addEventListener('click', handleCellClick, {once:true}) ; 
      })

      setContainerHoverClass();
      winningMessageElement.classList.remove('show');
}

function handleCellClick(e){
    const cell = e.target;
    const currclass= isPlayer_O_Turn ? player_O_Class : player_X_Class
    placeMark(cell, currclass);

    if(checkWin(currclass))
    {
        endGame(false);
    }
    else if(isDraw()){
        endGame(true);
    }
    else{
        swapTurns();
        setContainerHoverClass()
    }
}

function endGame(draw){
    if(draw){
        winningMessageElement.innerText = "It's A Draw!"
    }
    else{
        winningMessageElement.innerText = `Player with ${isPlayer_O_Turn ? "0's" : "X's" } wins!`
    }

    winningMessageElement.classList.add('show')
}

function isDraw(){
    return [...cellElements].every(cell => {
        return cell.classList.contains(player_X_Class) || cell.classList.contains(player_O_Class)
    })
}

function placeMark(cell,currclass){
 cell.classList.add(currclass);
}

function swapTurns(){
    isPlayer_O_Turn = !isPlayer_O_Turn;
}

function setContainerHoverClass(){
    boardElement.classList.remove(player_X_Class);
    boardElement.classList.remove(player_O_Class);

    if(isPlayer_O_Turn){
        boardElement.classList.add(player_O_Class)
    }
    else{
        boardElement.classList.add(player_X_Class)
    }
}

function checkWin(currclass){
    return winningConditions.some(combination => {
        return combination.every.apply(index => {
            return cellElements[index].classList.contains(currclass)
        })
    })
}
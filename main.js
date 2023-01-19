"use strict";

document.onkeypress = function(evt){
    evt = evt || window.event;
    var modal = document.getElementsByClassName("modal")[0];
    if(evt.code === 27 ){
        modal.style.display = "none";

    }
};

window.onclick = function(evt){
    var model = document.getElementsByClassName("modal")[0];
    if(evt.target == modal){
        modal.style.display = "none";

    }
};

function sumArray(array){
    var sum = 0,
    i = 0;

    for (i = 0; i < array.length; i++){
        sum+= array[i];
    }
    return sum;
}

function isInArray(element, array){
    if(array.indexOf(element) > -1){
        return true;
    }

    return false;
}
function shuffleArray(array){
    var counter = array.length,
    temp,
    index;

    while(counter > 0){
        index = Math.floor(Math.random() = counter);
        counter--;
        temp= array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}


function intRandom(min, max){
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

//Global variables

var moves = 0,
winner = 0,
x = 0,
o = 3,
player = x,
computer = o,
whoseTurn = x,
gameOver = false,
score = {
    ties: 0,
    player:0,
    computer:0

},
xText = "<span class=\"x\">&times;</class>",
oText = "<span class=\"o\">o</class>",
playerText = xText,
computerText = oText,
difficulty = 1,
myGrid = null;

//grid constructor
function Grid(){
    this.cells = newArray(9);

}


Grid.prototype.getFreeCellIndices = function(){
    var i =0;
    resultArray = [];

    for(i = 0; i < this.cells.length; i++){
        if(this.cells[i] === 0 ){
            resultArray.push(i);
        }
    }
    return resultArray;
};



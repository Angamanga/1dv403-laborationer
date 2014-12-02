"use strict";
window.onload = function(){
function Memory(rows, cols, gameID){
    this.rows=rows;
    this.cols=cols;
    this.gameID=gameID;
    this.order = RandomGenerator.getPictureArray(rows, cols);
    }
    
Memory.prototype.drawBoard = function(){
var board = document.getElementById(this.gameID);
var table = board.appendChild(document.createElement("TABLE"));
for(var i = 1;i<=this.rows;i++){
var rows = document.createElement("TR");
for(var j =1;j<=this.cols;j++){
var cols = document.createElement("TD");
rows.appendChild(cols);
}
table.appendChild(rows);
}


var backImage = document.createElement("img");
backImage.src= "pics/back.png";
backImage.classname="backImage";
board.appendChild(backImage);
    
    


}

var mem = new Memory(4,6,"game1");
mem.drawBoard();


    
};
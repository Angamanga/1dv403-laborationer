"use strict";

window.onload = function(){
    var board1 = new MessageBoard("board1");
    board1.createBoard(board1);
    var board2 = new MessageBoard("board2");
    board2.init();
    
};
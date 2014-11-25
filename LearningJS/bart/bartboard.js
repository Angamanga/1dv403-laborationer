/**
 * Created by Angamanga on 24/11/2014.
 */
function BartBoard(text, boardId){
    var doc = {
        board: document.getElementById(boardId)
    };

setInterval(function(){
    doc.board.innerHTML +=text[i];
    i+=1;


})

}

window.onload = function(){
    new BartBoard("Hej", board1);
    new BartBoard("Jaja",board2);

}
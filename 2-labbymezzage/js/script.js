
"use strict"

window.onload = function(){
var MessageBoard = {
    messages:[],
    init:function(e){
        
    }
	};

var mess1 = new Message("Remember to be nice", new Date());
var mess2 = new Message("Just create", new Date());
MessageBoard.messages.push(mess1);
MessageBoard.messages.push(mess2);
alert(MessageBoard.messages[0].getText());
	};


"use strict"

window.onload = function(){

var MessageBoard = {
    messages:[],
    init:function(e){
var message = new Message();
    }
	};
MessageBoard.init();	
	
	
var messageInput = document.querySelector(".messageInput");
var submitMessage = document.querySelector(".submitMessage");
var messages = document.querySelector(".messages");
var p = document.querySelector(".counter")
submitMessage.addEventListener("click", function(e){
var txt = messageInput.value;
var dte = new Date();
var msg = new Message(txt,dte);
MessageBoard.messages.push(msg);
p.innerHTML = "Antal meddelanden: " + MessageBoard.messages.length;
console.log(txt);
console.log(dte);
console.log(msg);
console.log(MessageBoard.messages[0].getText());
console.log(MessageBoard.messages.toString());

});

var showDate = document.querySelector(".showDate");
showDate.addEventListener("click",function(e){
    alert("Inlagget skapades den" + this.getDate());            //kolla upp!
    }
);
};
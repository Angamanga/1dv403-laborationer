
"use strict"

window.onload = function(){

var MessageBoard = {
    messages:[],
    init:function(e){
var message = new Message();
    },
writeMessage: function (){
    console.log(MessageBoard.message[0].toString());
    
	}
};
MessageBoard.init();	
function writeMessage(input){
     var messContainer = document.createElement("div");         //  <div class ="messages">
    messContainer.className = "messages";
     var container = document.querySelector(".container");
    container.appendChild(messContainer);
    var text = document.createTextNode(input);
    messContainer.appendChild(text);
    var img1 =document.createElement("img");
    img1.className ="showDate";
    img1.src="pics/14.png";
    img1.alt="visa tid";
    var img2 =document.createElement("img");
    img2.className ="delete";
    img2.src="pics/12.png";
    img2.alt="radera meddelande";
    messContainer.appendChild(img1);
    messContainer.appendChild(img2);
    
    // container.appendChild("messContainer");
    // messContainer.appendChild(image);
    // messContainer.appendChild(image);
    // messContainer.appendChild(text);

//     <img src="pics/14.png" alt="tid" class="showDate"></img>
  //              <img src="pics/12.png" alt="radera meddelande" class="delete"></img>
    //         </div>    
}	


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

writeMessage(txt);



});

var showDate = document.querySelector(".showDate");
showDate.addEventListener("click",function(e){
    alert("Inlagget skapades den" + this.getDate());            //kolla upp!
    }
);
};
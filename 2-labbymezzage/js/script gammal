"use strict";

window.onload = function() {
  var MessageBoard = {
        messages: [],
        init: function() {
            var message = new Message();
            },
        removeMessage: function(i){
                    MessageBoard.messages.splice(i,1)
            },
        alertDate: function(i){
            var p = 
            alert(p);
        },
        renderMessage: function(messageID){
            var container = document.querySelector(".container");
            var messContainer = document.createElement("div"); 
            messContainer.className = "messages";
            container.appendChild(messContainer);
            var textP = document.createElement("p");
            textP.setAttribute("class","text");
             messContainer.appendChild(textP);
            textP.innerHTML = MessageBoard.messages[messageID].getHTMLtext();
            var timeP = document.createElement("p");
            timeP.setAttribute("class","time");
            // var text = document.createTextNode(MessageBoard.messages[messageID].getHTMLtext());
            var time = document.createTextNode(MessageBoard.messages[messageID].getDate().getHours() +":"+ MessageBoard.messages[messageID].getDate().getMinutes() + ":"+MessageBoard.messages[messageID].getDate().getSeconds());
            var linkDelete=document.createElement("a");
            linkDelete.setAttribute("src", "#");
            var img2 = document.createElement("img");
            img2.setAttribute("class","submitDelete");
            img2.setAttribute("src","pics/12.png");
            img2.setAttribute("alt","radera meddelande");
            linkDelete.appendChild(img2);
             messContainer.appendChild(linkDelete);
            img2.onclick = function(messageID){
               var a=window.confirm("VIll du verkligen radera meddelandet?");
                    if(a===true){                   
                MessageBoard.removeMessage(messageID);
                MessageBoard.renderMessages();
                p.innerHTML = "Antal meddelanden: " + MessageBoard.messages.length;
                    }
                    }
            messContainer.appendChild(img2);
           
            
            messContainer.appendChild(timeP);
            timeP.appendChild(time);
            
             var img1 = document.createElement("img");
            img1.setAttribute("class","showDate");
            img1.setAttribute("src","pics/14.png");
            img1.setAttribute("alt","visa tid");
            messContainer.appendChild(img1);
            var alertbox=MessageBoard.messages[messageID].getDate();
            img1.onclick = function(messageID){
            alert("Inlagget skapades den: " + alertbox);
        }}
            ,
            renderMessages: function(){
            document.querySelector(".container").innerHTML="";
            for(var i=0;i<MessageBoard.messages.length;++i){
                MessageBoard.renderMessage(i);
            }
  }};
  
  MessageBoard.init();
  

var messageInput = document.querySelector(".messageInput");
var submitMessage = document.querySelector(".submitMessage");
var messages = document.querySelector(".messages");
var p = document.querySelector(".counter");

function submit(){
        var txt = messageInput.value;
        var dte = new Date();
        var msg = new Message(txt, dte);
        MessageBoard.messages.push(msg);
        p.innerHTML = "Antal meddelanden: " + MessageBoard.messages.length;
        MessageBoard.renderMessages();
        messageInput.value="";
    
}
        
 submitMessage.addEventListener("click", function(e) {
       submit();
       messageInput.reset();
});

 messageInput.onkeypress = function(e, messageID){
     
       if(e.keyCode == 13 && !e.shiftKey){
         submit();
       }
}
};
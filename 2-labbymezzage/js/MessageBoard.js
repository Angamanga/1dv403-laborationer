"use strict";

function MessageBoard(boardnb){
    var messageInput = document.querySelector(".messageInput");
    var submitMessage = document.querySelector(".submitMessage");
    var message = document.querySelector(".message");
    var p = document.querySelector(".counter");
    this.messages = [];
    var that = this;
    this.init = function() {
      //funktion som skapar ett meddelande fran den inmatade texten samt haller reda pa hur manga meddelanden som skrivits
            function submit(){
                var txt = messageInput.value;
                var dte = new Date();
                var msg = new Message(txt, dte);
                that.messages.push(msg);
                p.innerHTML = "Antal meddelanden: " + that.messages.length;
                that.renderMessages();
                messageInput.value="";
                }
            //skapar ett meddelande da anvandaren trycker pa skriv
            submitMessage.addEventListener("click", function(e) {
              submit();
             });
            //skapar ett meddelande da anvandaren trycker enter och radbrytning da anvandaren trycker shift-enter
             messageInput.onkeypress = function(e, messageID){
             if(e.keyCode == 13 && !e.shiftKey){
              submit();
            }}
        };
        this.removeMessage=function(i){
        this.messages.splice(i,1);
            };
        this.renderMessages=function(){
                document.querySelector(".container").innerHTML="";
                for(var i=0;i<this.messages.length;++i){
                    this.renderMessage(i);
                }};
        this.renderMessage = function(messageID){
        //skapar div for ett meddelande med classname "messContainer"
        var container = document.querySelector(".container");
        var messContainer = document.createElement("div"); 
        messContainer.className = "messages";
        container.appendChild(messContainer);
        //skapar en p-tagg som ska innahalla texten
        var textP = document.createElement("p");
        textP.setAttribute("class","text");
        messContainer.appendChild(textP);
        textP.innerHTML = this.messages[messageID].getHTMLtext();
        //skapar en p-tagg som ska innehalla tiden
         var timeP = document.createElement("p");
        timeP.setAttribute("class","time");
        messContainer.appendChild(timeP);
        timeP.innerHTML = this.messages[messageID].getDate().toLocaleTimeString();
        //Skapar en lank och lagger till en bild som ska visa datum som en alertbox da man klickar pa bilden
        var linkTime=document.createElement("a");
        linkTime.setAttribute("src", "#");
        linkTime.setAttribute("class","showDate")
        var img1 = document.createElement("img");
        img1.setAttribute("src","pics/14.png");
        img1.setAttribute("alt","visa tid");
        messContainer.appendChild(linkTime);
        linkTime.appendChild(img1);
        var alertTime=this.messages[messageID].getDate();
        img1.onclick = function(){
        alert("Inlagget skapades den: " + alertTime);
            };
        //gor en lank och lagger till en bild som ska radera meddelandet om man klickar pa bilden
        var linkDelete=document.createElement("a");
        linkDelete.setAttribute("src", "#");
        linkDelete.setAttribute("class","submitDelete");
        var img2 = document.createElement("img");
        img2.setAttribute("src","pics/12.png");
        img2.setAttribute("alt","radera meddelande"); 
        messContainer.appendChild(linkDelete);
        linkDelete.appendChild(img2);
        //funktion som raderar meddelande
        img2.onclick = function(messageID){
        var a=window.confirm("VIll du verkligen radera meddelandet?");
                if(a===true){                   
        that.removeMessage(messageID);
        that.renderMessages();
        p.innerHTML = "Antal meddelanden: " + that.messages.length;
                }
              };
            };
}
"use strict";

var MessageBoard = function(boardnb){
    this.boardnb = boardnb;
    this.messages = [];
};

//funktion som skapar ett meddelande fran text skriven i textarean
    MessageBoard.prototype.submit = function(){
        var txt = document.querySelector(".messageInput").value;
        var msg = new Message(txt, new Date());
        this.messages.push(msg);
        this.counter.innerHTML = "Antal meddelanden: " + this.messages.length;
        this.renderMessages();
        this.messageInput.value="";
            };

 //funktion som skapar messageboard        
   MessageBoard.prototype.createBoard = function(){
        
        //skapar en header i div-taggen dar applikationen ska ligga
        var board = document.getElementById(this.boardnb);
        var header = document.createElement("header");
        var h1 = document.createElement("h1");
        h1.innerHTML = "Labby Mezzage";
        board.appendChild(header);
        header.appendChild(h1);
    //skapar en div att lagga meddelanden i
    var container = document.createElement("div");
        container.className = "container";
        board.appendChild(container);
    //skapar en plats for raknaren
   
        this.counter =  document.createElement("p");
        this.counter.className = "counter";
        board.appendChild(this.counter);
        
     //skapar en textarea att skriva meddelandet i
   var textarea = document.createElement("textarea");
    textarea.className = "messageInput";
     board.appendChild(textarea);
     //skapar en eventlyssnare som skapar ett meddelande (anropar funktionen submit) da anvandaren trycker pa enter och radbrytning da anvandaren trycker pa shift-enter
        textarea.onkeydown = function(e){
        if(e.keyCode == 13 && !e.shiftKey){
               this.submit();
               return false;
         }}.bind(this);
         
         this.messageInput = document.querySelector(".messageInput");
 
         //skapar en skrivknapp
        var inputButton = document.createElement("input");
        inputButton.type = "button";
        inputButton.value = "skriv";
        inputButton.className = "submitMessage";
        board.appendChild(inputButton);
    //skapar en eventlyssnare som skapar ett meddelande (anropar funktionen submit) da anvandaren trycker pa skrivknappen med musknappen
         inputButton.onclick = function(e){
         this.submit(); 
          return false;
         }.bind(this);
        
         };


    
            
    //funktion som tar bort ett meddelande        
    MessageBoard.prototype.removeMessage = function(i){
        var a=window.confirm("Vill du verkligen radera meddelandet?");
                if(a===true){                   
        this.messages.splice(i,1);
        this.renderMessages();
        this.counter.innerHTML = "Antal meddelanden: " + this.messages.length;
            };
    };
    
   
         
       
    //funktion som tar bort alla meddelanden och sedan lagger till dom igen        
    MessageBoard.prototype.renderMessages = function(){
                document.querySelector(".container").innerHTML="";
                for(var i=0;i<this.messages.length;++i){
                    this.renderMessage(i);
                    console.log(this.messages[i].getText());
                }};
                
    MessageBoard.prototype.renderMessage = function(messageID){
         //skapar div for ett meddelande med classname "messContainer"
        var container = document.querySelector(".container");
        var messContainer = document.createElement("div"); 
        messContainer.className = "message"+this.boardnb;
        container.appendChild(messContainer);
         //skapar en p-tagg som ska innahalla texten
        var textP = document.createElement("p");
        textP.setAttribute("class","text");
        messContainer.appendChild(textP);
        textP.innerHTML = this.messages[messageID].getHTMLtext();
        this.messages[messageID].getHTMLtext();
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
        //onclick-event som raderar ett meddelande
        img2.onclick = function(messageID){
        that.removeMessage(messageID);
                }
        //gor en lank och lagger till en bild for editering av meddelanden
        var edit=document.createElement("a");
        edit.setAttribute("src", "#");
        edit.setAttribute("class","submitEdit");
        var img3 = document.createElement("img");
        img3.setAttribute("src","pics/13.png");
        img3.setAttribute("alt","editera meddelande"); 
        messContainer.appendChild(edit);
        edit.appendChild(img3);
        //onclick-event som editerar ett meddelande
        img3.onclick = function(){
        var textbox = document.querySelector(".messageInput"+this.boardnb);
        textbox.value = that.messages[messageID].getHTMLtext();
         //skapar en andraknapp
        var changeButton = document.createElement("input");
        changeButton.type = "button";
        changeButton.value = "ändra";
        changeButton.className = "submitMessage";
        //skapar en eventlyssnare som skriven in den nya texten i ratt plats i arrayen mha metoden setText. 
        changeButton.onclick = function(e){
            that.messages[messageID].setText(textbox.value);
            textbox.value = "";
            that.renderMessages();
            board.removeChild(changeButton);
            return false;
        }
        var board = document.getElementById(this.boardnb);
        board.appendChild(changeButton);
                }
              };
       
    
     MessageBoard.prototype.init = function(){
     MessageBoard.createBoard();
         };

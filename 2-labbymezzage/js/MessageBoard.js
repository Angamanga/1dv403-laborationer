//"use strict";

var MessageBoard = function(boardnb){
    this.boardnb = boardnb;
    var that = this;
    this.messages = [];
   
    //funktion som skapar ett meddelande fran text skriven i textarean
    this.submit = function(){
        var txt = that.messageInput.value;
        var msg = new Message(txt, new Date());
        this.messages.push(msg);
        this.counter.innerHTML = "Antal meddelanden: " + this.messages.length;
        this.renderMessages();
        this.messageInput.value="";
            };
    //funktion som tar bort ett meddelande        
    this.removeMessage = function(i){
        var a=window.confirm("Vill du verkligen radera meddelandet?");
                if(a===true){                   
        this.messages.splice(i,1);
        this.renderMessages();
        this.counter.innerHTML = "Antal meddelanden: " + this.messages.length;
            };};
    //funktion som skapar messageboard        
    this.createBoard = function(boardnb){
        //skapar en header i div-taggen dar applikationen ska ligga
        var board = document.getElementById(boardnb);
        var header = document.createElement("header");
        var h1 = document.createElement("h1");
        h1.innerHTML = "Labby Mezzage";
        board.appendChild(header);
        header.appendChild(h1);
        //skapar en div att lagga meddelanden i
        var container = document.createElement("div");
        container.className = "container"+boardnb;
        board.appendChild(container);
        //skapar en plats for raknaren
        this.counter =  document.createElement("p");
        this.counter.className = "counter"+boardnb;
        board.appendChild(this.counter);
        //skapar en textarea att skriva meddelandet i
        var textarea = document.createElement("textarea");
        textarea.className = "messageInput"+boardnb;
        //skapar en eventlyssnare som skapar ett meddelande (anropar funktionen submit) da anvandaren trycker pa enter och radbrytning da anvandaren trycker pa shift-enter
        textarea.onkeydown = function(e){
             if(e.keyCode == 13 && !e.shiftKey){
              that.submit();
              return false;
        }};
        board.appendChild(textarea);
        this.messageInput = document.querySelector(".messageInput"+boardnb);
        //skapar en skrivknapp
        var inputButton = document.createElement("input");
        inputButton.type = "button";
        inputButton.value = "skriv";
        inputButton.className = "submitMessage";
        //skapar en eventlyssnare som skapar ett meddelande (anropar funktionen submit) da anvandaren trycker pa skrivknappen med musknappen
        inputButton.onclick = function(e){
            that.submit(); 
            return false;
        }
        board.appendChild(inputButton);
        };
         
       
    //funktion som tar bort alla meddelanden och sedan lagger till dom igen        
    this.renderMessages = function(){
                document.querySelector(".container"+boardnb).innerHTML="";
                for(var i=0;i<this.messages.length;++i){
                    this.renderMessage(i);
                    console.log(this.messages[i].getText());
                }};
    this.renderMessage = function(messageID){
         //skapar div for ett meddelande med classname "messContainer"
        var container = document.querySelector(".container"+boardnb);
        var messContainer = document.createElement("div"); 
        messContainer.className = "message"+boardnb;
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
                
        var edit=document.createElement("a");
        edit.setAttribute("src", "#");
        edit.setAttribute("class","submitEdit");
        var img3 = document.createElement("img");
        img3.setAttribute("src","pics/13.png");
        img3.setAttribute("alt","editera meddelande"); 
        messContainer.appendChild(edit);
        edit.appendChild(img3);
        //onclick-event som raderar ett meddelande
        img3.onclick = function(){
        var textbox = document.querySelector(".messageInput"+boardnb);
        textbox.value = that.messages[messageID].getHTMLtext();
         //skapar en andra
        var changeButton = document.createElement("input");
        changeButton.type = "button";
        changeButton.value = "ändra";
        changeButton.className = "submitMessage";
        //skapar en eventlyssnare som skapar ett meddelande (anropar funktionen submit) da anvandaren trycker pa skrivknappen med musknappen
        changeButton.onclick = function(e){
            that.messages[messageID].setText(textbox.value);
            textbox.value = "";
            that.renderMessages();
            board.removeChild(changeButton);
            return false;
        }
        var board = document.getElementById(boardnb);
        board.appendChild(changeButton);
                }
              };
       
    
     this.init = function(){
     this.createBoard(boardnb);
     
         }

}
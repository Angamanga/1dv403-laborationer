"use strict";

var Memory = function(rows, cols, gameID) {
    this.rows = rows; // antal rader
    this.cols = cols; // antal kolumner
    this.gameID = gameID; //hanvisning till div id
    this.order = RandomGenerator.getPictureArray(rows, cols); //array med slumpade nummer
    this.bricks = [];
    this.counter=0;
    this.brick1;
    this.brick2;
    this.nbCorrectGuesses=0;
    this.classID;
   };
   
   Memory.prototype.addBricks = function(n) {
        var memBoard = document.getElementById(this.gameID);
        var a = document.createElement("a");
        var backImage = document.createElement("img");
        var div = document.createElement("div");
        a.setAttribute("href", "#");
        a.setAttribute("class",n);
        backImage.src = "pics/back.png";
        memBoard.appendChild(div);
        div.appendChild(a);
        a.appendChild(backImage);
        a.onclick = function(e) {
            var that=this;
           if(this.counter===0){
               backImage.src = this.bricks[n].getBrickSrc();
               this.brick1=this.bricks[n].getBrickID();
               this.counter=1;
            this.classID=n;
           console.log(this.classID);
           }
            else if(this.counter===1){
                backImage.src = this.bricks[n].getBrickSrc();
                this.brick2=this.bricks[n].getBrickID();
               var brick1=document.getElementsByClassName(this.classID);
            //     if(this.brick1.getBrickID()===this.brick2.getBrickID()){
            //     this.nbCorrectGuesses+2;
            //     if(this.nbCorrectGuesses===this.bricks.length){
            //     alert("Du klarade det pa " +this.nbCorrectGuesses/2+" gissningar!");
            //  }
            // else{
         setTimeout(function() {
            backImage.src = "pics/back.png";
            brick1.backImage.src="pics/back.png";
         }, 700);
         this.counter=0;
         
        //     }   
        //   };
        
            }  
        }.bind(this);
       
   };
   
   Memory.prototype.start = function() {
       for(var i = 0; i<this.order.length;i++){
            this.bricks[i]=new Brick(this.order[i]);
            }
      
    for (var j = 0; j < this.bricks.length; j++) {
          this.addBricks(j);
        }
    };
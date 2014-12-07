"use strict";

var Memory = function(rows, cols, gameID) {
    this.rows = rows; // antal rader
    this.cols = cols; // antal kolumner
    this.gameID = gameID; //hanvisning till div id
    this.order = RandomGenerator.getPictureArray(rows, cols); //array med slumpade nummer
    this.bricks = []; //array med brickor som ska anvandas
    this.flippedBricks = [];
    this.counter = 0;
    this.nbCorrectGuesses = 0;
    this.classID;
    this.nbGuesses = 0;

};

Memory.prototype.flipBrick = function(n, backImage) {
        if (this.counter === 0) {
            this.flippedBricks.push(this.bricks[n].getBrickID());
            this.classID = n;

            return this.bricks[n].getBrickSrc();
        }
        else if (this.counter === 1) {
            this.flippedBricks.push(this.bricks[n].getBrickID());
            return this.bricks[n].getBrickSrc();
        }
    }
    //         else if(this.counter===1){
    //             backImage.src = this.bricks[n].getBrickSrc();
    //             this.brick2=this.bricks[n].getBrickID();
    //           var brick1=document.getElementsByClassName(this.classID);
    //         //     if(this.brick1.getBrickID()===this.brick2.getBrickID()){
    //         //     this.nbCorrectGuesses+2;
    //         //     if(this.nbCorrectGuesses===this.bricks.length){
    //         //     alert("Du klarade det pa " +this.nbCorrectGuesses/2+" gissningar!");
    //         //  }
    //         // else{
    //      setTimeout(function() {
    //         backImage.src = "pics/back.png";
    //         brick1.backImage.src="pics/back.png";
    //      }, 700);
    //      this.counter=0;

//     //     }   
//     //   };

//             }  
//         }.bind(this);


//   };

Memory.prototype.addBricks = function(n) {
    var memBoard = document.getElementById(this.gameID);
    var a = document.createElement("a");
    var backImage = document.createElement("img");
    var div = document.createElement("div");
    a.setAttribute("href", "#");
    backImage.setAttribute("class", n);
    backImage.src = "pics/back.png";
    memBoard.appendChild(div);
    div.appendChild(a);
    a.appendChild(backImage);
    
    a.onclick = function(e) {
        console.log(this.nbCorrectGuesses);
        if (this.counter === 0) {
            backImage.src = this.flipBrick(n);
            this.counter = 1;
            this.nbGuesses += 1;
            }
        else if (this.counter === 1) {
            backImage.src = this.flipBrick(n);
            if (this.flippedBricks[0] === this.flippedBricks[1]) {
                this.nbCorrectGuesses += 2;
                    if (this.nbCorrectGuesses === this.bricks.length) {
                        alert("You won the game! You needed " + this.nbGuesses + " to finish the game!");
                    }
            }
            else {
                    setTimeout(function() {
                        backImage.src = "pics/back.png";
                        var firstBrick = memBoard.getElementsByClassName(this.classID)[0];
                     firstBrick.src="pics/back.png";
                        }.bind(this), 700);
                    }
                this.flippedBricks=[];
                this.counter=0;
                }

    }.bind(this);

};

Memory.prototype.start = function() {
    //skapar brickor med slumpade id:n och lagger dom i arrayen bricks.
    for (var i = 0; i < this.order.length; i++) {
        this.bricks[i] = new Brick(this.order[i]);
    }
    //lagger ut brickorna pa sidan
    for (var j = 0; j < this.bricks.length; j++) {
        this.addBricks(j);
    }
};
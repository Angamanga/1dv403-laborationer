"use strict";
var Memory = function(rows, cols, gameID) {
    this.rows = rows; // antal rader
    this.cols = cols; // antal kolumner
    this.gameID = gameID; //hanvisning till div id
    this.order = RandomGenerator.getPictureArray(rows, cols); //array med slumpade nummer
    this.bricks = [];
   };

Memory.prototype.createBricks = function() {
    for (var i = 0; i < this.order.length; i++) {
        this.bricks[i] = new Brick(this.order[i]);
    }
};

 Memory.prototype.click = function(n) {
      return this.bricks[n].getBrickSrc();
              };
              
Memory.prototype.addBoard = function(n) {
    var board = document.getElementById(this.gameID);
    var a = document.createElement("a");
    var image = document.createElement("img");
    a.setAttribute("class",cn);
    image.src="pics/back.png";
    a.appendChild(this.image);
    a.setAttribute("href","#");
    a.setAttribute("class",cn);
    a.onclick=function(e){
        image.src=this.bricks[n].getBrickSrc();
               setTimeout(function() {
            this.image.src = "pics/back.png";
            }, 3000);
           }
           cols.appendChild(a);
            rows.appendChild(cols);
        }
        table.appendChild(rows);
    }
    
};

Memory.prototype.start = function() {
    this.createBricks();
    this.addBoard(); 
    for(var i = 0; i<this.bricks.length;i++){
        this.click(i);
    }

};

"use strict";

var Memory = function(rows, cols, gameID) {
    this.rows = rows; // antal rader
    this.cols = cols; // antal kolumner
    this.gameID = gameID; //hanvisning till div id
    this.order = RandomGenerator.getPictureArray(rows, cols); //array med slumpade nummer
    this.bricks=[];
    
    var that = this;

    //startfunktion
    this.start = function() {
       for(var i = 0; i<this.order.length;i++){
            this.bricks[i]=new Brick(this.order[i]);
            }
      
    for (var j = 0; j < this.bricks.length; j++) {
           addBricks(j);
        }
    };
    
//   Memory.prototype.generateBricks = function() {
//}
    //skapar brickor
    
    function addBricks(n) {
    
        var a = document.createElement("a");
        a.src = "#";
        console.log("hej");
        var backImage = document.createElement("img");
        backImage.src = "pics/back.png";
        var counter=0;
        var ID;
        a.onclick = function(e) {
            if(counter===0) {
                backImage.src = "pics/" + that.bricks[n].getBrickID() + ".png";
                ID=that.bricks[n].getBrickID();    
                counter=1  
            }
            else if(counter===1){
              backImage.src = "pics/" + that.bricks[n].getBrickID() + ".png";
                setTimeout(function() {
                    backImage.src = "pics/back.png";
                    }, 3000);
                    
                    }
         
        };
        memBoard.appendChild(a);
        a.appendChild(backImage);
    }
};
    
Memory.prototype.drawBoard = function() {
        var board = document.getElementById(this.gameID);
        var table = board.appendChild(document.createElement("TABLE"));
        for (var i = 0; i < this.rows; i++) {
            var rows = document.createElement("TR");
            for (var j = 0; j < this.cols; j++) {
                var cols = document.createElement("TD");
                rows.appendChild(cols);
            }
               table.appendChild(rows);
           }
       };
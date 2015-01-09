"use strict";

DASHBOARD.Memory = function() {

    var imgIco,
        menuTxt;

    this.imgIco = "pics/imgView.png";
    this.menuTxt = "ImageViewer";
};


var Memory = function(rows, cols, gameID) {
    this.rows = rows; // antal rader
    this.cols = cols; // antal kolumner
    this.gameID = gameID; //hanvisning till div id
    this.order = RandomGenerator.getPictureArray(rows, cols); //array med slumpade nummer
    this.bricks = []; //array med brickor som ska anvandas
    this.flippedBricks = []; //array för att hålla koll på och jämföra de brickor som vänts
    this.counter = 0; //räknar hur många brickor som är vända
    this.nbCorrectGuesses = 0; //räknar hur många rätta gissningar användaren gjort
    this.classID; //håller koll på föregående brickas klass för att kunna lägga tillbaka bakgrundsbilden då båda brickorna vänts upp
    this.nbGuesses = 0; //håller koll på antal gjorda försök
};

//funktion för att vända en bricka
Memory.prototype.flipBrick = function(n) {
    if (this.counter === 0) {
        this.flippedBricks.push(this.bricks[n].getBrickID());
        this.classID = n;
        return this.bricks[n].getBrickSrc();
    }
    else if (this.counter === 1) {
        this.flippedBricks.push(this.bricks[n].getBrickID());
        return this.bricks[n].getBrickSrc();
    }
};

//ritar upp memorybordet
Memory.prototype.addBricks = function(n) {
    var memBoard = document.getElementById(this.gameID); //letar reda på rätt div
    var a = document.createElement("a"); //variabel för att skapa en länk
    var backImage = document.createElement("img"); //variabel för att skapa bilderna
    var div = document.createElement("div"); //variabel för att skapa divar att lägga bilderna i

    memBoard.style.height = (this.rows * 75 + "px"); //sätter höjd och bredd på spelplanen beroende på hur många rader och kolumner det är
    memBoard.style.width = (this.cols * 75 + "px");
    a.setAttribute("href", "#"); //skapar länk
    backImage.setAttribute("class", n); //skapar klass på varje bild
    backImage.src = "pics/back.png"; //ritar ut baksidan på brickorna
    memBoard.appendChild(div);
    div.appendChild(a);
    a.appendChild(backImage);

    //klickevent för att vända brickorna och göra kontroller beroende på hur många brickor som vänts upp, hur många som är rätt osv.
    a.onclick = function(e) {
        e.preventDefault();
        if (e.target.getAttribute("src") == "pics/back.png") {
            if (this.counter === 0) {
                backImage.src = this.flipBrick(n);
                this.counter = 1;
                this.nbGuesses += 1;
            }

            else if (this.counter === 1) {
                backImage.src = this.flipBrick(n);
                this.counter = 2;
                console.log(this.counter);
                if (this.flippedBricks[0] === this.flippedBricks[1]) {
                    this.nbCorrectGuesses += 2;
                    this.counter = 0;
                    this.flippedBricks = [];
                    if (this.nbCorrectGuesses === this.bricks.length) {
                        while (memBoard.hasChildNodes()) {
                            memBoard.removeChild(memBoard.lastChild);
                        }
                        var p = document.createElement("p");
                        p.innerHTML = "Grattis! Du klarade spelet på " + this.nbGuesses + " gissningar! Vill du starta ett nytt spel?";
                        var newGame = document.createElement("a");
                        newGame.setAttribute("href", "#");
                        newGame.innerHTML = "Ja!";
                        newGame.onclick = function() {
                            while (memBoard.hasChildNodes()) {
                                memBoard.removeChild(memBoard.lastChild);
                            }
                            MemoryApp.init();
                        };
                        memBoard.appendChild(p);
                        memBoard.appendChild(newGame);
                    }
                }
                else if (this.flippedBricks[0] !== this.flippedBricks[1]) {
                    setTimeout(function() {
                        backImage.src = "pics/back.png";
                        var firstBrick = memBoard.getElementsByClassName(this.classID)[0];
                        firstBrick.src = "pics/back.png";
                        this.counter = 0;
                        this.flippedBricks = [];
                    }.bind(this), 700);
                }


            }
        }
    }.bind(this);



};

Memory.prototype.start = function() {
    var i, j;
    //skapar brickor med slumpade id:n och lagger dom i arrayen bricks.
    for (i = 0; i < this.order.length; i++) {
        this.bricks[i] = new Brick(this.order[i]);
    }
    //lagger ut brickorna pa sidan
    for (j = 0; j < this.bricks.length; j++) {
        this.addBricks(j);
    }
};
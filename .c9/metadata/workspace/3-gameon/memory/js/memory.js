{"changed":true,"filter":false,"title":"memory.js","tooltip":"/3-gameon/memory/js/memory.js","value":"\"use strict\";\n\nvar Memory = function(rows, cols, gameID) {\n    this.rows = rows; // antal rader\n    this.cols = cols; // antal kolumner\n    this.gameID = gameID; //hanvisning till div id\n    this.order = RandomGenerator.getPictureArray(rows, cols); //array med slumpade nummer\n    this.bricks = []; //array med brickor som ska anvandas\n    this.flippedBricks = []; //array för att hålla koll på och jämföra de brickor som vänts\n    this.counter = 0; //räknar hur många brickor som är vända\n    this.nbCorrectGuesses = 0; //räknar hur många rätta gissningar användaren gjort\n    this.classID; //håller koll på föregående brickas klass för att kunna lägga tillbaka bakgrundsbilden då båda brickorna vänts upp\n    this.nbGuesses = 0; //håller koll på antal gjorda försök\n};\n\n//funktion för att vända en bricka\nMemory.prototype.flipBrick = function(n) {\n    if (this.counter === 0) {\n        this.flippedBricks.push(this.bricks[n].getBrickID());\n        this.classID = n;\n        return this.bricks[n].getBrickSrc();\n    }\n    else if (this.counter === 1) {\n        this.flippedBricks.push(this.bricks[n].getBrickID());\n        return this.bricks[n].getBrickSrc();\n    }\n};\n\n//ritar upp memorybordet\nMemory.prototype.addBricks = function(n) {\n    var memBoard = document.getElementById(this.gameID); //letar reda på rätt div\n    var a = document.createElement(\"a\"); //variabel för att skapa en länk\n    var backImage = document.createElement(\"img\"); //variabel för att skapa bilderna\n    var div = document.createElement(\"div\"); //variabel för att skapa divar att lägga bilderna i\n\n    memBoard.style.height = (this.rows * 75 + \"px\"); //sätter höjd och bredd på spelplanen beroende på hur många rader och kolumner det är\n    memBoard.style.width = (this.cols * 75 + \"px\");\n    a.setAttribute(\"href\", \"#\"); //skapar länk\n    backImage.setAttribute(\"class\", n); //skapar klass på varje bild\n    backImage.src = \"pics/back.png\"; //ritar ut baksidan på brickorna\n    memBoard.appendChild(div);\n    div.appendChild(a);\n    a.appendChild(backImage);\n\n    //klickevent för att vända brickorna och göra kontroller beroende på hur många brickor som vänts upp, hur många som är rätt osv.\n    a.onclick = function(e) {\n        console.log(this.nbCorrectGuesses);\n        if (this.counter === 0) {\n            backImage.src = this.flipBrick(n);\n            this.counter = 1;\n            this.nbGuesses += 1;\n        }\n        else if (this.counter === 1) {\n            backImage.src = this.flipBrick(n);\n            if (this.flippedBricks[0] === this.flippedBricks[1]) {\n                this.nbCorrectGuesses += 2;\n                if (this.nbCorrectGuesses === this.bricks.length) {\n                    while (memBoard.hasChildNodes()) {\n                        memBoard.removeChild(memBoard.lastChild);\n                    }\n                    var p = document.createElement(\"p\");\n                    p.innerHTML = \"Grattis! Du klarade spelet på \" + this.nbGuesses + \" gissningar! Vill du starta ett nytt spel?\";\n                    var newGame = document.createElement(\"a\");\n                    newGame.setAttribute(\"href\", \"#\");\n                    newGame.innerHTML = \"Ja!\";\n                    newGame.onclick = function() {\n                        while (memBoard.hasChildNodes()) {\n                            memBoard.removeChild(memBoard.lastChild);\n                        }\n                        MemoryApp.init();\n                    };\n                    memBoard.appendChild(p);\n                    memBoard.appendChild(newGame);\n                }\n            }\n            else {\n                setTimeout(function() {\n                    backImage.src = \"pics/back.png\";\n                    var firstBrick = memBoard.getElementsByClassName(this.classID)[0];\n                    firstBrick.src = \"pics/back.png\";\n                }.bind(this), 700);\n            }\n            this.flippedBricks = [];\n            this.counter = 0;\n        }\n    }.bind(this);\n};\n\nMemory.prototype.start = function() {\n    //skapar brickor med slumpade id:n och lagger dom i arrayen bricks.\n    for (var i = 0; i < this.order.length; i++) {\n        this.bricks[i] = new Brick(this.order[i]);\n    }\n    //lagger ut brickorna pa sidan\n    for (var j = 0; j < this.bricks.length; j++) {\n        this.addBricks(j);\n    }\n};","undoManager":{"mark":96,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":43,"column":86},"end":{"row":43,"column":87},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":85},"end":{"row":43,"column":86},"action":"remove","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":84},"end":{"row":43,"column":85},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":83},"end":{"row":43,"column":84},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":83},"end":{"row":43,"column":84},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":84},"end":{"row":43,"column":85},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":85},"end":{"row":43,"column":86},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":86},"end":{"row":43,"column":87},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":87},"end":{"row":43,"column":88},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":88},"end":{"row":43,"column":89},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":89},"end":{"row":43,"column":90},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":90},"end":{"row":43,"column":91},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":91},"end":{"row":43,"column":92},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":92},"end":{"row":43,"column":93},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":93},"end":{"row":43,"column":94},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":94},"end":{"row":43,"column":95},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":95},"end":{"row":43,"column":96},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":96},"end":{"row":43,"column":97},"action":"insert","lines":["ä"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":97},"end":{"row":43,"column":98},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":98},"end":{"row":43,"column":99},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":99},"end":{"row":43,"column":100},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":100},"end":{"row":43,"column":101},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":101},"end":{"row":43,"column":102},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":102},"end":{"row":43,"column":103},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":103},"end":{"row":43,"column":104},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":104},"end":{"row":43,"column":105},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":105},"end":{"row":43,"column":106},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":106},"end":{"row":43,"column":107},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":107},"end":{"row":43,"column":108},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":108},"end":{"row":43,"column":109},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":109},"end":{"row":43,"column":110},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":110},"end":{"row":43,"column":111},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":111},"end":{"row":43,"column":112},"action":"insert","lines":["å"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":112},"end":{"row":43,"column":113},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":113},"end":{"row":43,"column":114},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":114},"end":{"row":43,"column":115},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":115},"end":{"row":43,"column":116},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":116},"end":{"row":43,"column":117},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":117},"end":{"row":43,"column":118},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":118},"end":{"row":43,"column":119},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":119},"end":{"row":43,"column":120},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":120},"end":{"row":43,"column":121},"action":"insert","lines":["ä"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":121},"end":{"row":43,"column":122},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":122},"end":{"row":43,"column":123},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":123},"end":{"row":43,"column":124},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":124},"end":{"row":43,"column":125},"action":"insert","lines":["ä"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":125},"end":{"row":43,"column":126},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":126},"end":{"row":43,"column":127},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":127},"end":{"row":43,"column":128},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":128},"end":{"row":43,"column":129},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":129},"end":{"row":43,"column":130},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":130},"end":{"row":43,"column":131},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":131},"end":{"row":43,"column":132},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":56,"column":24},"end":{"row":56,"column":25},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":24},"end":{"row":58,"column":28},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":20},"end":{"row":59,"column":24},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":16},"end":{"row":59,"column":20},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":12},"end":{"row":59,"column":16},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":8},"end":{"row":59,"column":12},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":4},"end":{"row":59,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":0},"end":{"row":59,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":58},"end":{"row":59,"column":4},"action":"remove","lines":["","    "]}]}],[{"group":"doc","deltas":[{"start":{"row":67,"column":26},"end":{"row":67,"column":27},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":67,"column":25},"end":{"row":67,"column":26},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":67,"column":24},"end":{"row":67,"column":25},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":20},"end":{"row":72,"column":24},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":16},"end":{"row":72,"column":20},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":12},"end":{"row":72,"column":16},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":8},"end":{"row":72,"column":12},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":4},"end":{"row":72,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":0},"end":{"row":72,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":71,"column":20},"end":{"row":72,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":71,"column":16},"end":{"row":71,"column":20},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":71,"column":12},"end":{"row":71,"column":16},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":71,"column":8},"end":{"row":71,"column":12},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":71,"column":4},"end":{"row":71,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":71,"column":0},"end":{"row":71,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":70,"column":54},"end":{"row":71,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":18},"end":{"row":72,"column":19},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":17},"end":{"row":72,"column":18},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":16},"end":{"row":72,"column":17},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":12},"end":{"row":72,"column":16},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":8},"end":{"row":72,"column":12},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":4},"end":{"row":72,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":0},"end":{"row":72,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":71,"column":21},"end":{"row":72,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":84,"column":17},"end":{"row":85,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":82,"column":17},"end":{"row":83,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":28},"end":{"row":8,"column":29},"action":"insert","lines":[" "]},{"start":{"row":27,"column":0},"end":{"row":27,"column":4},"action":"insert","lines":["    "]},{"start":{"row":29,"column":57},"end":{"row":29,"column":58},"action":"remove","lines":[" "]},{"start":{"row":30,"column":41},"end":{"row":30,"column":52},"action":"remove","lines":["           "]},{"start":{"row":31,"column":51},"end":{"row":31,"column":52},"action":"remove","lines":[" "]},{"start":{"row":32,"column":45},"end":{"row":32,"column":52},"action":"remove","lines":["       "]},{"start":{"row":33,"column":0},"end":{"row":33,"column":4},"action":"remove","lines":["    "]},{"start":{"row":34,"column":25},"end":{"row":34,"column":26},"action":"insert","lines":[" "]},{"start":{"row":34,"column":27},"end":{"row":34,"column":28},"action":"insert","lines":[" "]},{"start":{"row":34,"column":38},"end":{"row":34,"column":39},"action":"insert","lines":[" "]},{"start":{"row":34,"column":40},"end":{"row":34,"column":41},"action":"insert","lines":[" "]},{"start":{"row":34,"column":43},"end":{"row":34,"column":44},"action":"insert","lines":[" "]},{"start":{"row":34,"column":45},"end":{"row":34,"column":46},"action":"insert","lines":[" "]},{"start":{"row":34,"column":52},"end":{"row":34,"column":57},"action":"remove","lines":["     "]},{"start":{"row":35,"column":24},"end":{"row":35,"column":25},"action":"insert","lines":[" "]},{"start":{"row":35,"column":26},"end":{"row":35,"column":27},"action":"insert","lines":[" "]},{"start":{"row":35,"column":37},"end":{"row":35,"column":38},"action":"insert","lines":[" "]},{"start":{"row":35,"column":39},"end":{"row":35,"column":40},"action":"insert","lines":[" "]},{"start":{"row":35,"column":42},"end":{"row":35,"column":43},"action":"insert","lines":[" "]},{"start":{"row":35,"column":44},"end":{"row":35,"column":45},"action":"insert","lines":[" "]},{"start":{"row":36,"column":33},"end":{"row":36,"column":52},"action":"remove","lines":["                   "]},{"start":{"row":37,"column":40},"end":{"row":37,"column":52},"action":"remove","lines":["            "]},{"start":{"row":38,"column":37},"end":{"row":38,"column":52},"action":"remove","lines":["               "]},{"start":{"row":39,"column":30},"end":{"row":39,"column":48},"action":"remove","lines":["                  "]},{"start":{"row":42,"column":0},"end":{"row":42,"column":4},"action":"remove","lines":["    "]},{"start":{"row":50,"column":8},"end":{"row":50,"column":12},"action":"remove","lines":["    "]},{"start":{"row":55,"column":16},"end":{"row":55,"column":20},"action":"remove","lines":["    "]},{"start":{"row":56,"column":0},"end":{"row":56,"column":4},"action":"remove","lines":["    "]},{"start":{"row":58,"column":29},"end":{"row":58,"column":30},"action":"insert","lines":[" "]},{"start":{"row":58,"column":31},"end":{"row":58,"column":32},"action":"insert","lines":[" "]},{"start":{"row":59,"column":20},"end":{"row":59,"column":25},"action":"remove","lines":["     "]},{"start":{"row":60,"column":0},"end":{"row":60,"column":4},"action":"remove","lines":["    "]},{"start":{"row":60,"column":31},"end":{"row":60,"column":32},"action":"insert","lines":[" "]},{"start":{"row":60,"column":33},"end":{"row":60,"column":34},"action":"insert","lines":[" "]},{"start":{"row":61,"column":20},"end":{"row":61,"column":24},"action":"remove","lines":["    "]},{"start":{"row":62,"column":0},"end":{"row":62,"column":3},"action":"remove","lines":["   "]},{"start":{"row":62,"column":20},"end":{"row":62,"column":21},"action":"remove","lines":[" "]},{"start":{"row":63,"column":20},"end":{"row":63,"column":24},"action":"remove","lines":["    "]},{"start":{"row":63,"column":37},"end":{"row":63,"column":38},"action":"insert","lines":[" "]},{"start":{"row":63,"column":39},"end":{"row":63,"column":40},"action":"insert","lines":[" "]},{"start":{"row":64,"column":0},"end":{"row":64,"column":2},"action":"remove","lines":["  "]},{"start":{"row":64,"column":20},"end":{"row":64,"column":22},"action":"remove","lines":["  "]},{"start":{"row":64,"column":35},"end":{"row":64,"column":36},"action":"insert","lines":[" "]},{"start":{"row":64,"column":37},"end":{"row":64,"column":38},"action":"insert","lines":[" "]},{"start":{"row":64,"column":48},"end":{"row":64,"column":49},"action":"insert","lines":[" "]},{"start":{"row":65,"column":0},"end":{"row":65,"column":8},"action":"remove","lines":["        "]},{"start":{"row":66,"column":24},"end":{"row":66,"column":28},"action":"insert","lines":["    "]},{"start":{"row":66,"column":69},"end":{"row":67,"column":24},"action":"insert","lines":["","                        "]},{"start":{"row":69,"column":20},"end":{"row":69,"column":24},"action":"remove","lines":["    "]},{"start":{"row":70,"column":0},"end":{"row":70,"column":1},"action":"remove","lines":[" "]},{"start":{"row":70,"column":20},"end":{"row":70,"column":23},"action":"remove","lines":["   "]},{"start":{"row":70,"column":44},"end":{"row":70,"column":45},"action":"remove","lines":[" "]},{"start":{"row":71,"column":0},"end":{"row":71,"column":4},"action":"remove","lines":["    "]},{"start":{"row":72,"column":0},"end":{"row":72,"column":1},"action":"remove","lines":[" "]},{"start":{"row":72,"column":16},"end":{"row":72,"column":19},"action":"remove","lines":["   "]},{"start":{"row":75,"column":16},"end":{"row":75,"column":20},"action":"remove","lines":["    "]},{"start":{"row":76,"column":0},"end":{"row":76,"column":2},"action":"remove","lines":["  "]},{"start":{"row":76,"column":20},"end":{"row":76,"column":22},"action":"remove","lines":["  "]},{"start":{"row":77,"column":0},"end":{"row":77,"column":4},"action":"remove","lines":["    "]},{"start":{"row":78,"column":20},"end":{"row":78,"column":21},"action":"remove","lines":[" "]},{"start":{"row":78,"column":34},"end":{"row":78,"column":35},"action":"insert","lines":[" "]},{"start":{"row":78,"column":36},"end":{"row":78,"column":37},"action":"insert","lines":[" "]},{"start":{"row":79,"column":16},"end":{"row":79,"column":24},"action":"remove","lines":["        "]},{"start":{"row":80,"column":12},"end":{"row":80,"column":20},"action":"remove","lines":["        "]},{"start":{"row":81,"column":0},"end":{"row":81,"column":2},"action":"remove","lines":["  "]},{"start":{"row":81,"column":12},"end":{"row":81,"column":14},"action":"remove","lines":["  "]},{"start":{"row":81,"column":30},"end":{"row":81,"column":31},"action":"insert","lines":[" "]},{"start":{"row":81,"column":32},"end":{"row":81,"column":33},"action":"insert","lines":[" "]},{"start":{"row":82,"column":0},"end":{"row":82,"column":1},"action":"remove","lines":[" "]},{"start":{"row":82,"column":12},"end":{"row":82,"column":15},"action":"remove","lines":["   "]},{"start":{"row":82,"column":24},"end":{"row":82,"column":25},"action":"insert","lines":[" "]},{"start":{"row":82,"column":26},"end":{"row":82,"column":27},"action":"insert","lines":[" "]},{"start":{"row":83,"column":0},"end":{"row":83,"column":8},"action":"remove","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":2},"end":{"row":15,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":5},"end":{"row":27,"column":6},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":23},"end":{"row":59,"column":60},"action":"remove","lines":[" var p = document.createElement(\"p\");"]}]}],[{"group":"doc","deltas":[{"start":{"row":61,"column":19},"end":{"row":62,"column":0},"action":"insert","lines":["",""]},{"start":{"row":62,"column":0},"end":{"row":62,"column":19},"action":"insert","lines":["                   "]}]}],[{"group":"doc","deltas":[{"start":{"row":61,"column":19},"end":{"row":61,"column":20},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":61,"column":20},"end":{"row":61,"column":57},"action":"insert","lines":[" var p = document.createElement(\"p\");"]}]}],[{"group":"doc","deltas":[{"start":{"row":61,"column":20},"end":{"row":61,"column":21},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":71,"column":21},"end":{"row":71,"column":22},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":4},"end":{"row":18,"column":8},"action":"remove","lines":["    "]},{"start":{"row":19,"column":0},"end":{"row":19,"column":4},"action":"remove","lines":["    "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":3},"action":"remove","lines":["   "]},{"start":{"row":20,"column":8},"end":{"row":20,"column":9},"action":"remove","lines":[" "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":4},"action":"remove","lines":["    "]},{"start":{"row":22,"column":4},"end":{"row":22,"column":8},"action":"remove","lines":["    "]},{"start":{"row":23,"column":0},"end":{"row":23,"column":2},"action":"remove","lines":["  "]},{"start":{"row":23,"column":4},"end":{"row":23,"column":6},"action":"remove","lines":["  "]},{"start":{"row":24,"column":0},"end":{"row":24,"column":4},"action":"remove","lines":["    "]},{"start":{"row":25,"column":8},"end":{"row":25,"column":12},"action":"remove","lines":["    "]},{"start":{"row":26,"column":0},"end":{"row":26,"column":1},"action":"remove","lines":[" "]},{"start":{"row":26,"column":4},"end":{"row":26,"column":7},"action":"remove","lines":["   "]},{"start":{"row":27,"column":0},"end":{"row":27,"column":4},"action":"remove","lines":["    "]},{"start":{"row":28,"column":0},"end":{"row":28,"column":4},"action":"remove","lines":["    "]},{"start":{"row":59,"column":0},"end":{"row":59,"column":23},"action":"remove","lines":["                       "]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":2},"end":{"row":28,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":60},"end":{"row":13,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":65},"end":{"row":59,"column":0},"action":"remove","lines":["",""]}]}]]},"ace":{"folds":[],"scrolltop":1329.5,"scrollleft":1.5,"selection":{"start":{"row":97,"column":2},"end":{"row":97,"column":2},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":82,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1418043374932}
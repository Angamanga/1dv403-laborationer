

function Viewer(name){
    this.name=name;
    };
    
Viewer.prototype.countour = function(classNm) {
    var countour,container;
    countour=document.createElement("div");
    countour.setAttribute("class", classNm);
    container=document.getElementById("dashboard");
    container.appendChild(countour);

    };
    
    var a= new Viewer("a");
    a.countour("imageviev");
    var b = new Viewer("b");
    b.countour("nextdiv");
function Viewer(name){
    this.name=name;
  
    };
    
Viewer.prototype.countour = function(classNm) {
    var container,countour;
    countour=document.createElement("div");
    countour.setAttribute("id", classNm);
    container=document.getElementById("dashboard");
    container.appendChild(countour);
    };
    
Viewer.prototype.menu = function(classNm) {
    var menu, imgico, text, countour, imgClose;
    countour=document.getElementById(classNm);
    menu=document.createElement("div");
    menu.setAttribute("class", "menu");
    countour.appendChild(menu);
    imgico=document.createElement("img");
    text=document.createElement("p");
    imgico.setAttribute("src","pics/11.png");
    menu.appendChild(imgico);
    text.innerHTML="menubar";
    imgClose = document.createElement("img");
    imgClose.setAttribute("src", "pics/11.png");
    menu.appendChild(text);
    menu.appendChild(imgClose);
};

Viewer.prototype.container = function(classNm) {
    var countour, container;
    countour=document.getElementById(classNm);
    container = document.createElement("div");
    countour.appendChild(container);
};

Viewer.prototype.status = function(classNm){
    var countour, status,text;
    countour = document.getElementById(classNm);
    status =document.createElement("div");
    status.setAttribute("class",classNm+status);
    countour.appendChild(status);
    text=document.createElement("p");
    text.innerHTML="statusbar";
    status.appendChild(text);
    
}


var a = new Viewer("imgView");
a.countour("imgView");
a.menu("imgView");
a.status("imgView");



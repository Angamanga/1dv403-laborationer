//huvudklass som alla andra fönster ska ärva från

function Window() {
 
};


Window.prototype.outline = function(classNm) {
    var container, countour, menu, imgMenu,  menuText, imgClose, imgCloseIco, aClose, functionDiv, statusBar, statusText, dashboard, closeDiv;
    imgCloseIco="pics/beforeClose.png";
   
   //huvuddiv
    countour = document.createElement("div");
    countour.setAttribute("class", "window "+ classNm);
    container = document.getElementById("dashboard");
    container.appendChild(countour);

    //menyrad

    menu = document.createElement("div");
    menu.setAttribute("class", "menu");
    imgMenu = document.createElement("img");
    imgMenu.setAttribute("src", this.imgIco);
    menuText = document.createElement("p");
    menuText.innerHTML = this.menuTxt;
    aClose=document.createElement("a");
    aClose.setAttribute("href", "#");
    imgClose = document.createElement("img");
    imgClose.setAttribute("src", imgCloseIco);
    
    countour.appendChild(menu);
    menu.appendChild(imgMenu);
    menu.appendChild(menuText);
    menu.appendChild(aClose);
    aClose.appendChild(imgClose);
    
    //här kan ny funktionalitet läggas

    functionDiv = document.createElement("div");
    functionDiv.setAttribute("class","functiondiv");
    countour.appendChild(functionDiv);

    //statusrad
    statusBar = document.createElement("div");
    statusBar.setAttribute("class", classNm + "status");
    statusText = document.createElement("p");
    statusText.innerHTML = "statusbar";
    countour.appendChild(statusBar);
    statusBar.appendChild(statusText);

    //stanger fonstret
    aClose.onmousedown = function(){
           imgClose.setAttribute("src", "pics/close.png");
    };
    
    aClose.onclick= function(){
    aClose.removeChild(imgClose);
    dashboard=document.querySelector("#dashboard");
    closeDiv=document.querySelector("."+classNm);
    dashboard.removeChild(closeDiv);
    return false;
    }

//hamtar bilder

  var images=new XMLHttpRequest();
    images.onreadystatechange=function(){
    if (images.readyState===4 && images.status===200){
var	imageArray = JSON.parse(images.responseText);
}
    images.open("GET","http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", false);
    images.send(null);
};
};

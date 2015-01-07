//huvudklass som alla andra fönster ska ärva från

function Window() {
 
};

Window.prototype.box = function(classNm1, classNm2) {
    var dashboard, outline, scrollbar, menu, imgMenu,  menuText, imgClose, imgCloseIco, aClose, appDiv, statusBar, statusText, dashboard, closeDiv;
    imgCloseIco = "pics/beforeClose.png";
    this.imgIco ="pics/imgView.png";
   
    //huvuddiv
    dashboard = document.getElementById("dashboard");
    outline = document.createElement("div");
    outline.classList.add("window");
    outline.classList.add("a"+classNm1);
    outline.classList.add(classNm2);
    dashboard.appendChild(outline);
    
    //menyrad
    menu = document.createElement("div");
    menu.setAttribute("class", "menu");
    imgMenu = document.createElement("img");
    imgMenu.setAttribute("src", this.imgIco);
    menuText = document.createElement("p");
    menuText.innerHTML = this.menuTxt;
    aClose = document.createElement("a");
    aClose.setAttribute("href", "#");
    imgClose = document.createElement("img");
    imgClose.setAttribute("src", imgCloseIco);
    outline.appendChild(menu);
    menu.appendChild(imgMenu);
    menu.appendChild(menuText);
    menu.appendChild(aClose);
    aClose.appendChild(imgClose);
    
    //i denna div kan ny funktionalitet läggas
    appDiv = document.createElement("div");
    appDiv.setAttribute("class","appDiv");
    outline.appendChild(appDiv);

    //statusrad
    statusBar = document.createElement("div");
    statusBar.setAttribute("class", "status");
    statusText = document.createElement("p");
    statusText.innerHTML = "statusbar";
    outline.appendChild(statusBar);
    statusBar.appendChild(statusText);

    //stanger fonstret
    aClose.onmousedown = function(){
    imgClose.setAttribute("src", "pics/close.png");
       };

    aClose.onclick= function(){
        console.log(classNm1);
        dashboard = document.querySelector("#dashboard");
        closeDiv=document.querySelector(".a"+ classNm1);
        dashboard.removeChild(closeDiv);
            return false;
       }
};

    
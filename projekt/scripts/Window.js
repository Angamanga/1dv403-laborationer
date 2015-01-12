"use strict";
//huvudklass som alla andra fönster ska ärva från

DASHBOARD.Window = function() {
        this.setMenuIco = function(_menuIco) {
            this.menuIco = _menuIco
            };
        this.setMenuTxt = function(_menuTxt) {
            this.menuTxt = _menuTxt
        }
};

DASHBOARD.Window.prototype.box = function(classNm, id) {
    var dashboard,
        outline,
        menu,
        menuImg,
        menuText,
        aClose,
        imgClose,
        imgCloseIco,
        appDiv,
        statusBar,
        closeDiv;
       
    //huvuddiv
    dashboard = document.getElementById("dashboard");
    outline = document.createElement("div");
    outline.classList.add("window");
    outline.classList.add(classNm);
    outline.setAttribute("id", "a" + id);
    dashboard.appendChild(outline);


    //menyrad
    menu = document.createElement("div");
    menu.setAttribute("class", "menu");
    menuImg = document.createElement("img");
    menuImg.setAttribute("src", this.menuIco);
    menuText = document.createElement("p");
    menuText.innerHTML = this.menuTxt;
    aClose = document.createElement("a");
    aClose.setAttribute("href", "#");
    imgClose = document.createElement("img");
    imgClose.setAttribute("src", "pics/beforeClose.png");
    outline.appendChild(menu);
    menu.appendChild(menuImg);
    menu.appendChild(menuText);
    menu.appendChild(aClose);
    aClose.appendChild(imgClose);

    //i denna div kan ny funktionalitet läggas
    appDiv = document.createElement("div");
    appDiv.setAttribute("class", "appDiv");
    outline.appendChild(appDiv);

    //statusrad
    statusBar = document.createElement("div");
    statusBar.setAttribute("class", "status");
    outline.appendChild(statusBar);

    //stanger fonstret
    aClose.onmouseover = function() {
        imgClose.setAttribute("src", "pics/close.png");
    };
    aClose.onmouseout = function() {
        imgClose.setAttribute("src", "pics/beforeClose.png");
    };
    aClose.onclick = function() {
        dashboard = document.querySelector("#dashboard");
        closeDiv = document.getElementById("a" + id);
        dashboard.removeChild(closeDiv);
        return false;
    }
};

"use strict";
//skapar skrivbordet
function MPDB() {
    var container,
        dashboard,
        dock,
        icon,
        menu;
    function createBoard() {
        container = document.getElementById("container");
        dashboard = createDiv(dashboard);
        dashboard.setAttribute("id", "dashboard");
        container.appendChild(dashboard);
        dock = createDiv();
        dock.setAttribute("id", "dock");
        container.appendChild(dock);
    }
    function createIcon(input,id){
        icon = createDiv();
        icon.setAttribute("class", "icon");
        icon.setAttribute("class",id);
        icon.style.backgroundImage = "url('pics/iwLarge.png')";
       icon.style.height="10%"
        dock.appendChild(icon);
       
        }
    
    function createDiv() {
        return document.createElement("div");
    }
    createBoard();
    createIcon("anna", "1");
};

window.onload = MPDB();
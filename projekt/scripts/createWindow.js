"use strict";
DASHBOARD.createBoard = function(){
   
   var container,
        dashboard;
        
    if(document.getElementById("container")){
        container = document.getElementById("container");
    }
    
    else{
        container = document.createElement("div");
        container.setAttribute("id", "container");
    }
    
    dashboard = document.createElement('div');
    dashboard.setAttribute("id", "dashboard");
    container.appendChild(dashboard);
}

DASHBOARD.createDock = function(){
    var dock;

    dock = document.createElement('div');
    dock.setAttribute("id", "dock");
    document.getElementById("container").appendChild(dock);
};

DASHBOARD.addDockIcons = function (){
    
    var counter = 0;
    //funktion som lagger till ikon till dockan
    function addIcon(appType){
    var dock,
        div,
        a;
    dock = document.getElementById("dock");
    div = document.createElement("div");
    div.setAttribute("class", "dock"+appType);
    a = document.createElement("a");
    a.setAttribute("href", "#");
    a.appendChild(div);
    a.onclick = function(){
            var b;
            counter+=1;
            b = new DASHBOARD.ImageViewer();
            b.box("imgView", counter);
            b.addPics(counter);
            return false;
        }
    dock.appendChild(a);
    }
addIcon("imgView");
}
        
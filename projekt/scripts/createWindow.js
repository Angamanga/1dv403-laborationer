"use strict";
//skapar skrivbordet
function createBoard() {
    
    var container,
        dashboard,
        dock,
        aImgView,
        iv,
        imgViewico,
        counterIv;
        
    imgViewico = "pics/iwSmall.png";

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
    
    dock = document.createElement('div');
    dock.setAttribute("id", "dock");
    container.appendChild(dock);

    aImgView = document.createElement("a");
    aImgView.setAttribute("href","#");

    iv = document.createElement("img");
    iv.setAttribute("src", imgViewico);
    
    aImgView.appendChild(iv);
    dock.appendChild(aImgView);
    
    aImgView.onclick = function(){
        var a;
        a = new ImageViewer();
        a.box(counterIv, "imgview");
        a.addPics();
        return false;
    }
    
    
    
}




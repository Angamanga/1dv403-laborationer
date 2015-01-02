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

    container = document.getElementById("container");
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
    counterIv = 0;
    aImgView.onclick = function(){
        var a;
        counterIv +=1;
        a = new ImageViewer();
        a.box(counterIv, "imgview");
        a.addPics();
        return false;
    }
    
    
    
}




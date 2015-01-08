"use strict";

DASHBOARD.ImageViewer = function() {

    var imgIco,
        menuTxt;

    this.imgIco = "pics/imgView.png";
    this.menuTxt = "ImageViewer";
};


//ärver från viewer
DASHBOARD.ImageViewer.prototype = new DASHBOARD.Window();

//skapar plats for bilderna
DASHBOARD.ImageViewer.prototype.addPics = function(id) {

    var thisWindow,
        status,
        statusIco,
        images,
        imageArray,
        widthArray,
        heightArray,
        thumbW,
        thumbH,
        n,
        outline,
        appDiv,
        div,
        a,
        imageThumb;
        
    //hittar ratt fonster
    thisWindow = document.getElementById("a" + id);
    //skriver ut laddikon i statusfaltet
    status = thisWindow.querySelector(".status");
    status.innerHTML = "Laddar";
    statusIco = document.createElement("img");
    statusIco.setAttribute("src", "pics/ajax-loader.gif");
    status.appendChild(statusIco);

    //hamtar bildinformation

    images = new XMLHttpRequest();

    images.onreadystatechange = function() {
        if (images.readyState === 4 && images.status === 200) {
            imageArray = JSON.parse(images.responseText);

            //kontrollerar hojd och langd pa thumsbilerna

            widthArray = imageArray.map(function(imageArray) {
                return imageArray.thumbWidth;
            });
            widthArray.sort(function(a, b) {
                return a - b;
            });
            heightArray = imageArray.map(function(imageArray) {
                return imageArray.thumbHeight;
            });
            heightArray.sort(function(a, b) {
                return a - b
            });
            thumbW = widthArray[widthArray.length - 1]
            thumbH = heightArray[heightArray.length - 1];

            //lagger till bilder
            for (n = 0; n < imageArray.length; n++) {
                add(n);
            }

            //andrar informationen i statusmenyn
            status.innerHTML = "Status: Klar, " + imageArray.length + " st bilder inlasta";
        }
    }
    images.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
    images.send(null);

    //funktion for att lagga till bilder
    function add(j) {
        appDiv = thisWindow.querySelector(".appDiv");
        thisWindow.style.width = (3 * thumbW + 11 * 3 + "px");
        div = document.createElement("div");
        div.style.width = (thumbW + "px");
        div.style.height = (thumbH + "px");
        a = document.createElement("a");
        a.setAttribute("href", "#");
        a.onclick = function() {
            document.getElementById("dashboard").style.backgroundImage = "url('" + imageArray[j].URL + "')";
            document.getElementById("dock").style.backgroundImage = "url('" + imageArray[j].URL + "')";
            return false;
        };
        imageThumb = document.createElement("img");
        imageThumb.setAttribute("src", imageArray[j].thumbURL);
        appDiv.appendChild(div);
        div.appendChild(a);
        a.appendChild(imageThumb);
    };




};

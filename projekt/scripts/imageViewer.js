"use strict";

function ImageViewer() {
    var imgIco, menuTxt;
    this.imgIco = "pics/imgView.png";
    this.menuTxt = "ImageViewer";
};

//ärver från viewer
ImageViewer.prototype = new Window();

//skapar plats for bilderna
ImageViewer.prototype.addPics = function() {
    var outline, images, getImages, imageArray, widthArray, thumbH, thumbW, heightArray, n, appDiv, div, a, imageThumb;
    //hamtar bildinformation
    images = new XMLHttpRequest();
    images.onreadystatechange = function() {
        if (images.readyState === 4 && images.status === 200) {
            imageArray = JSON.parse(images.responseText);
        }
    }
    images.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", false);
    images.send(null);

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

    //funktion for att lagga till bilder
    function add(j) {
        outline = document.querySelector(".window");
        appDiv = document.querySelector(".appDiv");
        outline.style.width = (3*thumbW + 9*3 + "px");
        div = document.createElement("div");
        div.style.width = (thumbW + "px");
        div.style.height = (thumbH + "px");
        a = document.createElement("a");
        a.setAttribute("href", "#");

        a.onclick = function() {
            var fullImage = new ImageViewer();
            fullImage.outline("bigImage");
            fullImage.bigImage();
            return false;
        };

        imageThumb = document.createElement("img");
        imageThumb.setAttribute("src", imageArray[j].thumbURL);
        appDiv.appendChild(div);
        div.appendChild(a);
        a.appendChild(imageThumb);
    };
    
  


};

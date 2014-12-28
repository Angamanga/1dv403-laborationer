function ImageViewer(){
    var images, 
        imageArray, imgIco, menuTxt, getImages;
        this.imgIco ="pics/imgView.png";
        this.menuTxt = "ImageViewer";
 
this.getImages = function(){
    images=new XMLHttpRequest();
    images.onreadystatechange=function(){
    if (images.readyState===4 && images.status===200){
	imageArray = JSON.parse(images.responseText);
}
    images.open("GET","http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", false);
    images.send(null);
};

		};
};



//ärver från viewer
ImageViewer.prototype = new Window();

//test
var test = new ImageViewer();
test.getImages();
test.outline("imgview");

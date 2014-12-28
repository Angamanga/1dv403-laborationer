function ImageViewer(){
    var imgIco, menuTxt;
        this.imgIco ="pics/imgView.png";
        this.menuTxt = "ImageViewer";
    };

//ärver från viewer
ImageViewer.prototype = new Window();

//skapar plats for bilderna
ImageViewer.prototype.addPics = function() {

    var images, getImages, imageArray, widthArray, thumbH, thumbW, heightArray, n, functionDiv, div, a, imageThumb;
    //hamtar bildinformation
    images=new XMLHttpRequest();
    images.onreadystatechange=function(){
 	imageArray = JSON.parse(images.responseText);
 	 console.log(this.imageArray);
        }
    images.open("GET","http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", false);
    images.send(null);
    
    //kontrollerar hojd och langd pa thumsbilerna
    
    widthArray = imageArray.map(function(imageArray){
		return imageArray.thumbWidth;
	});

    widthArray.sort(function(a,b){
		return a-b});


	heightArray = imageArray.map(function(imageArray) {
	    return imageArray.thumbHeight;
	});
	heightArray.sort(function(a,b){
		return a-b});
	thumbW = widthArray[widthArray.length-1]	
    thumbH = heightArray[heightArray.length-1];
    
    //funktion for att lagga till bilder
    function add(j){
    functionDiv = document.querySelector(".functiondiv");
     functionDiv.style.width = (3 * thumbW +4 + "px");
     div = document.createElement("div");
     div.style.width = (thumbW + "px");
     div.style.height = (thumbH + "px");
    a = document.createElement("a");
    a.setAttribute("href", "#");
    imageThumb = document.createElement("img");
    imageThumb.setAttribute("src", imageArray[j].thumbURL);
    functionDiv.appendChild(div);
    div.appendChild(a);
    a.appendChild(imageThumb);
    };
   
   for (n = 0; n < imageArray.length; n++) {
        add(n);
    }
    
    
       };
       
       
//test
var test = new ImageViewer();
test.outline("imgview");
test.addPics();


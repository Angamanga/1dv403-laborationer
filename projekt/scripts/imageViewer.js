function ImageViewer(){
    var images, 
        imageArray, imgIco;
      this.imgIco="pics/1.png";
   
//     images=new XMLHttpRequest();
//     images.onreadystatechange=function(){
// 		if (images.readyState===4 && images.status===200){
// 			imageArray = JSON.parse(images.responseText);
// 			console.log(imageArray);
// 		}
// 		    images.open("GET","http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", false);
// 			images.send(null);
// 		};
		};



//ärver från viewer
ImageViewer.prototype = new Window();



//test
var test = new ImageViewer();
test.outline("imgview");

console.log(test.imgIco);
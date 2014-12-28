var images=new XMLHttpRequest();

images.onreadystatechange=function(){
var	imageArray = JSON.parse(images.responseText);
console.log(imageArray);
    
};

images.open("GET","http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", false);
images.send(null);

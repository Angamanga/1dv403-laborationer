function ImageViewer(){
    console.log('hejsvejs');
    
} 

ImageViewer.prototype = new Viewer("imageViewer");
// myImageViewer.countour("imageViewer");
// myImageViewer.menu("imageViewer");
// myImageViewer.container("imageViewer");
// myImageViewer.status("imageViewer");

var b = new ImageViewer("nextdiv");
b.countour("nextdiv");
b.menu("nextdiv");
b.status("nextdiv");
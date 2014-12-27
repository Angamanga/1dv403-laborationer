function Draggable(element, dragStart, dragDrop) {
    this.element = element;
    this.dragStart = dragStart;
    this.dragDrop = dragDrop;
    this.element.classList.add('draggable');
    var self = this;
    var move = function(event) {
        if (self.dragStart !== undefined) {
            self.dragStart();
        }
        event.stopPropagation();
        event.preventDefault();
        document.body, null
        var originalLeft = parseInt(window.getComputedStyle(this).left);
        var originalTop = parseInt(window.getComputedStyle(this).top);
        var mouseDownX = event.clientX;
        var mouseDownY = event.clientY;
        function dragMe(event) {
            self.element.style.left = originalLeft + event.clientX - mouseDownX + "px";
            self.element.style.top = originalTop + event.clientY - mouseDownY + "px";
            event.stopPropagation();
        }
        function dropMe(event) {
            document.removeEventListener('mousemove', dragMe, true);
            document.removeEventListener('mouseup', dropMe, true);
            if (self.dragDrop !== undefined) {
                self.dragDrop();
            }
            event.stopPropagation();
        }
        document.addEventListener('mouseup', dropMe, true);
        document.addEventListener('mousemove', dragMe, true);
        console.log(event.type);
        console.log(event.currentTarget);
    };
    this.element.addEventListener('mousedown', move, false);
};
var dragStart = function() {
    this.element.style.width = parseInt(window.getComputedStyle(this.element).width) * 1.3 + "px";
}
var dragDrop = function() {
    this.element.style.width = parseInt(window.getComputedStyle(this.element).width) * (100 / 130) + "px";
}
//tester
var element1 = document.querySelector(".imgview");
//var element2 = document.getElementById("nextdiv");
// var element3 = document.getElementById("imageViewer");
var dragObject1 = new Draggable(element1, dragStart, dragDrop);
//var dragObject2 = new Draggable(element2, dragStart, dragDrop);
//var dragObject3 = new Draggable(element3, dragStart, dragDrop);
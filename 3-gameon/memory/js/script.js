"use strict";
var MemoryApp = {
   init: function(){
      var mem1 = new Memory(7,7,"game1");
     var mem2 = new Memory(2,2,"game2");
      mem1.start();
      mem2.start();
   }
};

window.onload=MemoryApp.init();
"use strickt";
var MemoryApp = {
   init: function(){
      var mem1 = new Memory(3,4,"game1");
      var mem2 = new Memory(5,4,"game2");
      mem1.start();
      mem2.start();
   }
};

window.onload=MemoryApp.init();
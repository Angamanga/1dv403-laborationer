"use strict";
console.log('listening');
var xmlhttp;
xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("quiz1").innerHTML=xmlhttp.responseText;
    }
};
xmlhttp.open("GET","http://vhost3.lnu.se:20080/question/1",true);
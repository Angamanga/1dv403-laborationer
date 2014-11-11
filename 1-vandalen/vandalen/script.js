"use strict";
var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}]; //input array med objekt

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });}

var makePerson = function(persArr){
var sortedPersArr=sortByKey(data,'age');//array med objekten sorterade efter age
var minAge = sortedPersArr[0].age;//lagsta alder
var maxAge = sortedPersArr[sortedPersArr.length-1].age;//hogsta alder
var sum = sortedPersArr.reduce(function(a,b,i){return a+b;})//FORTSATT HAR, FUNKAR EJ!
var average =sum/(persArr.length);
var names;
console.log(sortedPersArr);
}

makePerson(data);
console.log(data);


var makePerson = function(persArr) { var result = {};

// Lös uppgiften

return result; } var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var result = makePerson(data);

console.log(result);
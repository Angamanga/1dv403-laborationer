"use strict";
var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}]; //input array med objekt



var makePerson = function(persArr){

//funktion for att sortera arrayen
function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });}


var sortedPersArr=sortByKey(data,'age');//array med objekten sorterade efter age
var minAge = sortedPersArr[0].age;//lagsta alder
var maxAge = sortedPersArr[sortedPersArr.length-1].age;//hogsta alder


var sum = sortedPersArr.reduce(function (a, b) {
  return {age: a.age + b.age}; // raknar ut summan av aldrarna i arrayen
})

var average =sum.age/(sortedPersArr.length); //raknar ut medelvardet av aldrarna
var sortedNames = sortByKey(persArr, name);//sorterar objekten map namn
var listNames = sortedNames.reduce(function (a, b) {return (a.name || a) + ", " + b.name});//tva satt att skriva ut namnen i en string
var test = sortedNames.map(function(elem){
    return elem.name;
}).join(", ");
}

makePerson(data);
console.log(data);


var makePerson = function(persArr) { var result = {};

// Lös uppgiften

return result; } var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var result = makePerson(data);

console.log(result);


function addLast(prev, current) {
        return prev + current;
    }
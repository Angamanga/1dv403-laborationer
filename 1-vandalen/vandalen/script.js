"use strict";
var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}]; //input array med objekt

var makePerson = function(persArr){

var sortedPersArr;
var minAge;
var maxAge;
var sum;
var average;
var sortedNames;
var listNames;
var names;

//funktion for att sortera arrayen
function sortByKey(array, key) {   
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });}
sortedPersArr=sortByKey(data,'age');			//array med objekten sorterade efter age
minAge = sortedPersArr[0].age;						//lagsta alder
maxAge = sortedPersArr[sortedPersArr.length-1].age;	//hogsta alder
sum = sortedPersArr.reduce(function (a, b) {
  return {age: a.age + b.age}; 						// raknar ut summan av aldrarna i arrayen
})
average =Math.ceil(sum.age/(sortedPersArr.length)); 			//raknar ut medelvardet av aldrarna
			

listNames = persArr.map(function(elem){		//laser ut namnen och returnerar dom som en array
    return elem.name;
})

names=((listNames.sort(function(a, b) {			//sorterar arrayen och gör om den till en sträng separerade med ", "
return a.localeCompare(b);
})).join(', ')).toString(); 

return {minAge:minAge, maxAge:maxAge, averageAge:average, names:names};



}

var result = makePerson(data);
console.log(result);



function addLast(prev, current) {
        return prev + current;
    }
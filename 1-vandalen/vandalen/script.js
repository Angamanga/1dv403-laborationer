"use strict";
var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
var makePerson = function(persArr){
var sortedPersArr=persArr.sort(age);
var maxAge;
var minAge;
var averageAge;
var names;
console.log(sortedPersArr);
}

makePerson(data);
console.log(data);


data.sort(function(a, b){
 return a.age-b.age
});


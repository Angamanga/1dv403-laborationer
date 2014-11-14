"use strict";

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}]; //input array med objekt

var makePerson = function(persArr){

var arrayAge;
var sum;
var arrayName;
var result = {minAge:0, maxAge:0, averageAge:0, names:""};

	arrayAge = persArr.map(function(input){					//laser ut namnen och returnerar dom som en ny array
		return input.age;
	}).sort();
	result.minAge = arrayAge[0];							//lagsta alder
	result.maxAge = arrayAge[arrayAge.length-1];			//hogsta alder
	sum = arrayAge.reduce(function(a, b){ 					//raknar ut summan av aldrarna i arrayen
		return a + b;
	});										
	result.averageAge = Math.ceil(sum/(arrayAge.length)); 	//raknar ut medelvardet av aldrarna
	arrayName = persArr.map(function(input){    			//laser ut namnen och returnerar dom som en ny array
		return input.name;
	});
	arrayName.sort(function(a, b) {							//sorterar arrayen
		return a.localeCompare(b);
	});
	result.names = arrayName.join(', ');					//gor om array med namn till string		
	
return result;

};

var result = makePerson(data);
console.log(result);

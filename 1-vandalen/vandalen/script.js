"use strict";

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}]; //input array med objekt


var makePerson = function(persArr){

var arrayAge;
var minAge;
var maxAge;
var average;


function Ages(input)
{
	
		arrayAge=input.map(function(input){				//laser ut namnen och returnerar dom som en ny array
			if(typeof(input.age) !== "number")	
			{
				throw new Error("den inlasta arrayen innehaller inga egenskaper 'age' av typen number");
			}
			return input.age;
			}).sort();
		
		minAge = arrayAge[0];						//lagsta alder
		maxAge = arrayAge[arrayAge.length-1];		//hogsta alder
		average = arrayAge.reduce(function(a, b) 	// raknar ut summan av aldrarna i arrayen
		{
			return a + b;
		});										
		average = Math.ceil(average/(arrayAge.length)); //raknar ut medelvardet av aldrarna
}	
var arrayName;
function Names(input)
{
	
		arrayName = persArr.map(function(input){
		if(typeof(input.name) !== "string")
		{		throw new Error("den inlasta arrayen innehaller inga egenskaper'name' av typen string");
    			
    	}
    	return input.name;
					});
		
		arrayName.sort(function(a, b) {			//sorterar arrayen
					return a.localeCompare(b);
				});

		return arrayName.join(', ');						//gor om arrayen till en strang separerade med ", "			
	}
	
var ages = Ages(persArr);
var names = Names(persArr);

return {minAge:minAge, maxAge:maxAge, averageAge:average, names:names};

};


var result = makePerson(data);
console.log(result);
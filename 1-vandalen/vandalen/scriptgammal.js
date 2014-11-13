"use strict";
var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}]; //input array med objekt


var makePerson = function(persArr){
	
var sortedAgeArr;
var minAge;
var maxAge;
var sum;
var average;
var sortedNames;
var listNames;
var name;
var arrayAge;
var arrayName;
var ages;
var names;

function Ages(input)
{
	if(typeof(input.age) === "number")
	{
		arrayAge=input.map(function(input){				//laser ut namnen och returnerar dom som en ny array
			return input.age;
		}).sort();
		minAge = arrayAge[0];						//lagsta alder
		maxAge = arrayAge[arrayAge.length-1];		//hogsta alder
		sum = arrayAge.reduce(function(a, b) 
		{
			return a + b;
		});										// raknar ut summan av aldrarna i arrayen
		average = Math.ceil(sum/(arrayAge.length)); 	//raknar ut medelvardet av aldrarna
	}	
	else
	{
		throw new Error("den inlasta arrayen innehaller inga egenskaper'age' av typen number");
	}
}
	
function Names(input)
{
	if(typeof(input.name) === "string")
	{
		arrayName = persArr.map(function(input){		//laser ut namnen och returnerar dom som en array
    					return input.name;
					});
		sortedNames = arrayName.sort(function(a, b) {			//sorterar arrayen
					return a.localeCompare(b);
				});

	name = sortedNames.join(', ');						//gor om arrayen till en strang separerade med ", "			
	}
	else
	{
		throw new Error("den inlasta arrayen innehaller inga egenskaper'name' av typen string");
	}
}

ages = new Ages(persArr);
names =new Names(persArr);

return {minAge:minAge, maxAge:maxAge, averageAge:average, names:name};


}

var result = makePerson(data);
console.log(result);



function addLast(prev, current) {
        return prev + current;
    }
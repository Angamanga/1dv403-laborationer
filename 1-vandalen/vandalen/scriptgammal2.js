"use strict";

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}]; //input array med objekt


var makePerson = function(persArr){
var arrayAge;
var average;
var arrayName;
var result = {minAge:0, maxAge:0, averageAge:0, names:""};

arrayAge=persArr.map(function(persArr){				//laser ut namnen och returnerar dom som en ny array
			//if(typeof(persArr.age) !== "number")	
			 //{
			 	//throw new Error("den inlasta arrayen innehaller inga egenskaper 'age' av typen number");
			 //}
				return persArr.age;
			}).sort();
		
result.minAge = arrayAge[0];						//lagsta alder
result.maxAge = arrayAge[arrayAge.length-1];		//hogsta alder
average = arrayAge.reduce(function(a, b) 	//raknar ut summan av aldrarna i arrayen
		{
			return a + b;
		});										
result.averageAge = Math.ceil(average/(arrayAge.length)); //raknar ut medelvardet av aldrarna


arrayName = persArr.map(function(input){    //laser ut namnen och returnerar dom som en ny array
	 if(typeof(input.name) !== "string")
	 {		
	  throw new Error("den inlasta arrayen innehaller inga egenskaper'name' av typen string");
    			
	} 
	    return input.name;
	});
		
	arrayName.sort(function(a, b) {			//sorterar arrayen
					return a.localeCompare(b);
				});

	result.names = arrayName.join(', ');				//returnerar en strang separerade med ", "			
	
	
return result;

};


var result = makePerson(data);
console.log(result);
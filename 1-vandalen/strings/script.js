"use strict";

window.onload = function(){
	var convertString = function(str){
	var newString=""; //Variabel som hanterar de konverterade värdena. 

	//Kontrollerar om en sträng har skrivits in. 
	if(str===""){
		throw new Error("ingen sträng har skrivits in");
	}
	//Loop för att jämföra tecknen i den inmatade strängen(str)	och adderar de konverterade tecknen till ny sträng
	else{ 
		for(var i=0;i<str.length;i++){
			if(str[i]==="a"||str[i]==="A"){
				newString+="#";
			}
			else if(str[i]===str[i].toLocaleUpperCase()){
				newString+=str[i].toLocaleLowerCase();
			}
			else if(str[i]===str[i].toLocaleLowerCase()){
				newString+=str[i].toLocaleUpperCase();
			}
		}
	}
	return newString; //returnerar den nya, konverterade strängen.
};


	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = convertString(input.value); // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}

	});
};



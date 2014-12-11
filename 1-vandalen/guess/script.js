"use strict";

window.onload = function(){ 
	
	var secret =  Math.floor( Math.random() * (100-1)+1) + 1; // Slumpat tal mellan 1-100.
	var count=0; //variabel för att räkna antalet gissningar. Deklareras utanför guessfunktionen för att inte nollställas varje gång en gissning görs.
	 
	var guess = function(number){
		count++; //Räknare för antalet gissningar.
		
		//If sats som kontrollerar gissningen mot secret number och returnerar en array innehållande ett booleanvärde och ett meddelande till användaren.
		if(number<0||number>100){
			return [false, "Talet är utanför intervallet 0 - 100"];
		}
		else if(number<secret){
			return [false, "Det hemliga talet är högre!"];
		}
		else if(number>secret){
			return [false, "Det hemliga talet är lägre!"];
		}
		else if(number==secret){ 
			return [true, "Grattis du vann! Det hemliga talet var " +secret +" och du behövde " +count +" gissningar för att hitta det."];
		}
	};
	
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value); // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}

	});
};
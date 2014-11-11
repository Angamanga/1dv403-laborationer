"use strict";

window.onload = function(){

	
	var birthday = function(date){
		//kontrollerar att inmatat datum ar i ratt format.
	if(date.match(/^[0-9]{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])/)){
	var now=Date.now(); 
	var today = new Date(now);//datumobjekt for idag
	var todayYear=today.getFullYear(); //tar fram aktuellt ar
	console.log(todayYear);
	var birthday = new Date(date);//datumobjekt for fodelsedagen
	var a; //hjalpvariabel for att kunna skapa datumobjekt for nasta fodelsedag

//if-sats for att kontrollera om nasta fodelsedag intraffar i ar eller nasta ar
	if(birthday.getMonth()>today.getMonth()){
			a=todayYear;
	}
	else if(birthday.getMonth()<today.getMonth()){
		a=todayYear+1;
	}
	else{
		if(birthday.getDate()>=today.getDate()){
			a=todayYear;	
				}
		else if(birthday.getDate()<today.getDate()){
			a=todayYear+1;
			}
		}
	
	var nB = birthday.setFullYear(a); //andrar artalet sa att det stammer overens med nar nasta fodelsedag intraffar
	var nextBirthday = new Date(nB); //datumobjekt for nasta fodelsedag
	var msToBirthday = nextBirthday.getTime() - today.getTime(); //ms till nasta fodelsedag
	var days = Math.floor(Math.abs(msToBirthday/86400000));//dagar till nasta fodelsedag
	console.log(days);
	console.log(parseInt(days)+1);
	return parseInt(days)+1;//returnerar dagar kvar till nasta fodelsedag
}
	else{ 
		throw new Error("Du har matat in födelsedagen i fel format. Använd formatet 'YYYY-MM-DD'");//om felaktigt format matats in kastas ett undantag.
	}
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
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};
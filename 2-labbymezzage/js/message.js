"use strict";

function Message(message, date){

	this.getText = function(){
		return message;
	}
	this.setText = function(_text){
		message = _text;					
	}

	this.getDate = function(){
		return date;
	}
	this.setDate = function(_date){
		date = _date
	}
}

Message.prototype.toString = function() {
	return this.getText() + " (" + this.getDate() + " )";
};

Message.prototype.getHTMLtext = function(first_argument) {
			//  Las pa!!
	// return  						<div class ="messages">
	// getText();
	//               <img src="pics/14.png" alt="tid" class="showDate"></img>
 //               <img src="pics/12.png" alt="radera meddelande" class="delete"></img>
 //       		  </div>    
};
"use strict";

function Message(message, date){

	this.getText = function(){
		return message;
	}
	this.setText = function(_text){
<<<<<<< HEAD
		message = _text;					//eventuellt _text??
=======
		message = _text;					
>>>>>>> 39a487fbe35c24f79c815f848ad07948e3f875f2
	}

	this.getDate = function(){
		return date;
	}
	this.setDate = function(_date){
		date = _date
	}
}

<<<<<<< HEAD
Message.prototype.toString = function(first_argument) {
	// body...
};
Message.prototype.getText = function(first_argument) {
	// body...
};
Message.prototype.setText = function(first_argument) {
	// body...
};
Message.prototype.getDate = function(first_argument) {
	// body...
};
Message.prototype.setDate = function(first_argument) {
	// body...
};
Message.prototype.getHTMLtext = function(first_argument) {
	// body...
=======
Message.prototype.toString = function() {
	return this.getText() + " (" + this.getDate() + " )";
};

Message.prototype.getHTMLtext = function() {
			return this.getText().replace(/\n/g, " <br> ");
>>>>>>> 39a487fbe35c24f79c815f848ad07948e3f875f2
};
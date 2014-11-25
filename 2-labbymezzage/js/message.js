"use strict";

function Message(message, date){

	this.getText = function(){
		return message;
	}
	this.setText = function(_text){
		message = _text;					//eventuellt _text??
	}

	this.getDate = function(){
		return date;
	}
	this.setDate = function(_date){
		date = _date
	}
}

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
};
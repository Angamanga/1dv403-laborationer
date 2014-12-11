"use strict";

window.onload=function(){

var quiz,
	questionAddress,
	answerAddress,
	answer,
	answerText,
	quizResponse,
	responseAnswer,
	responseText,
	question,
	userAnswer,
	answerInput,
	answerButton,
	div1,
	div2,
	div3;


function init(){
	question();
	drawQuestionBoard();
	getAnswer();
};

function question(){
	quiz=new XMLHttpRequest();
	quiz.onreadystatechange=function(){
		if (quiz.readyState===4 && quiz.status===200){
			quizResponse = JSON.parse(quiz.responseText);
		}
	}
	if(questionAddress===undefined){
		questionAddress="http://vhost3.lnu.se:20080/question/1";
	}
	else{
		questionAddress=responseAnswer.nextURL;
	}
	quiz.open("GET", questionAddress, false);
	quiz.send(null);	
	};

function createDiv(){
	return document.createElement("div");
};

function drawQuestionBoard(){
	question=document.querySelector(".question");
	question.innerHTML=quizResponse.question;
	div1=createDiv();
	question.appendChild(div1);
	answerInput=div1.appendChild(document.createElement("textarea"));
	answerButton=document.createElement("input");
	answerButton.type = "button";
	answerButton.value = "skicka svar";
	answerButton.className = "submitAnswer";
	div2=createDiv();
	div1.appendChild(div2);
	div2.appendChild(answerButton);
	};

function getAnswer(){
	answerButton.onclick = function(e){
	userAnswer=answerInput.value;
	console.log(userAnswer);
	sendAnswer();
	}	
};

function sendAnswer(){
	answerAddress=quizResponse.nextURL;
	answer=new XMLHttpRequest();

	answer.onreadystatechange=function(){
		if (answer.readyState===4 && answer.status===200){
			responseAnswer=JSON.parse(answer.responseText);
			}
		};
	answerText={
		answer:userAnswer
	};
	answer.open('POST', answerAddress, true);
	answer.setRequestHeader('Content-Type', 'application/json');
	answer.send(JSON.stringify(answerText));
	init();
};



init();
};
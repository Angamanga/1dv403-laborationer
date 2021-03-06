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
	question1,
	userAnswer,
	answerInput,
	answerButton,
	questionCounter=0,
	answerCounter=0,
	answerArray=[],
	div1,
	div2,
	div3,
	i,
	list;

function init(){
	questionCounter++;
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
		if(questionAddress===undefined||responseAnswer.hasOwnProperty('nextURL')){
			if(questionAddress===undefined){
				questionAddress="http://vhost3.lnu.se:20080/question/1";
				}
			else if(responseAnswer.hasOwnProperty('nextURL')){
				questionAddress=responseAnswer.nextURL;
			}
			quiz.open("GET", questionAddress, false);
			quiz.send(null);	
		}
		else{
			writeResults();
		}
	};

function drawQuestionBoard(){
	question1=document.querySelector(".question");
	question1.innerHTML=quizResponse.question;
	div1=createDiv();
	question1.appendChild(div1);
	answerInput=div1.appendChild(document.createElement("textarea"));
	answerButton=document.createElement("input");
	answerButton.type = "button";
	answerButton.value = "skicka svar";
	answerButton.className = "submitAnswer";
	div2=createDiv();
	div1.appendChild(div2);
	div2.appendChild(answerButton);
	div3=createDiv();
	div2.appendChild(div3);
	div3.innerHTML="";
	};

function createDiv(){
	return document.createElement("div");
};

function getAnswer(){
	answerButton.onclick = function(e){
	div3.innerHTML="";
	userAnswer=answerInput.value;
	answerCounter++;
	sendAnswer();
	}	
};

function sendAnswer(){
	answerAddress=quizResponse.nextURL;
	answer=new XMLHttpRequest();
	answer.onreadystatechange=function(){
		if (answer.readyState===4 && answer.status===200){
			responseAnswer=JSON.parse(answer.responseText);
			addQuestion(questionCounter,answerCounter);
			init();
			answerCounter=0;
		}
		else if(answer.readyState===4&&answer.status===400){
			showError();
		}
	};
	answerText={
		answer:userAnswer
		};
	answer.open('POST', answerAddress, true);
	answer.setRequestHeader('Content-Type', 'application/json');
	answer.send(JSON.stringify(answerText));
};

function addQuestion(questionCounter,answerCounter){
	answerArray.push(new AnswerCount(questionCounter, answerCounter));
};

function showError(){
	div3.innerHTML="Du svarade fel, forsok igen!";
};

function writeResults(){
	for(i=0;i<answerArray.length;i++){
		list=document.createElement("li");
		div1.appendChild(list);
		list.innerHTML="Antal gissningar pa fraga"+answerArray[i].questionnb+": "+answerArray[i].nbGuess;
		}
	}

init();
};
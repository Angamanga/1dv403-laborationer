"use strict";

//FIXA QUESTIONCOUNTER+addQuestion

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
	console.log(questionCounter);
	quiz.onreadystatechange=function(){
		if (quiz.readyState===4 && quiz.status===200){
			quizResponse = JSON.parse(quiz.responseText);
			questionCounter++;
			console.log(questionCounter);
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
	question1=document.querySelector(".question");
	question1.innerHTML=quizResponse.question+questionCounter;
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
	};

function getAnswer(){
	answerButton.onclick = function(e){
	userAnswer=answerInput.value;
	answerCounter++;
	sendAnswer();
	}	
};

function showError(){
	div3=createDiv();
	div2.appendChild(div3);
	div3.innerHTML="Du svarade fel, forsok igen!";
};
function addQuestion(questionCounter,answerCounter){
console.log(questionCounter);
console.log(answerCounter);
}

function sendAnswer(){
	answerAddress=quizResponse.nextURL;
	answer=new XMLHttpRequest();

	answer.onreadystatechange=function(){
		if (answer.readyState===4 && answer.status===200){
			responseAnswer=JSON.parse(answer.responseText);
			init();
			addQuestion(questionCounter,answerCounter);
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




init();
};
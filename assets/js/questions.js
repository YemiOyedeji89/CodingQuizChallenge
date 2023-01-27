quiz = [
{  
    //questionNumber:"Q1",
    question: "What tag is used to define a list Item in html?" , 
    answers: [
        "<ol>",
        "<ul>",
        "<li>"
    ], 
    correctAnswer: "<li>",
},
{   
    //questionNumber:"Q2",
    question: "What statement is used to end a loop in javascript?" , 
    answers: [
        "Close statement",
        "Break statement",
        "Conditional statement"
    ], 
    correctAnswer: "Break statement", 
},
{   
   //questionNumber:"Q3",
    question: "What Javascript element that represent either TRUE or FALSE values?" , 
    answers: [
        "Boolean",
        "String",
        "Condition"
    ], 
    correctAnswer: "Boolean",
},
{   
   // questionNumber:"Q4",
    question: "In an HTML document, where is the title tag located?" , 
    answers: [
        "<Div>",
        "<Head>" ,
        "<Header>"
    ], 
    correctAnswer: "<Head>",
},
   
];


var scores = 0;

// To start quiz
startQuiz = document.getElementById("start");
showQuestionsTitle = document.getElementById("questions");
choices = document.getElementById("choices");
options = document.getElementById("options");
resultSection = document.getElementById("display-result");
showQuestions = document.getElementById("question-title");
listLists = document.querySelector(".order-lists");
var timer = document.getElementById("time");
//button = document.createElement("BUTTON");



 var indexOn;
var questionNumberDisplayed;
var answerOption1;
var answerOption2;
var answerOption3;
var displayQuestion; 
var correctAnswerDisplayed ;
var answerSelected ;
var currentQuestionIndex;
var secondsLeft = 10;


startGame = startQuiz.addEventListener("click",  showQuiz);



//TO DISPLAY QUIZ 
function showQuiz(){
    
    startQuiz.classList.add("hide");
    showQuestionsTitle.classList.remove("hide"); 
    setQuestionTimer();
    setQuestion();
}

//// SET QUIZ TIMER
function setQuestionTimer(){
 
 var timerInterval = setInterval(function() {
    secondsLeft--;
    
    timer.textContent = secondsLeft;
   
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      startQuiz.classList.remove("hide");
      showQuestionsTitle.classList.add("hide");
      location.reload();
      startGame;
    }
  }, 1000);
}


////TO DISPLAY QUESTIONS ////
function setQuestion(){

    for (let i = 0; i < quiz.length; i++){
    
        //let quesDisplay = quiz[i].question;
         indexOn = [0];
        indexOn = Math.floor(Math.random()* quiz.length);
        displayQuestion = quiz[indexOn].question;
       
        //GETTING THE ANSWER OPTIONS
        answerOption1= quiz[indexOn].answers[0];
        answerOption2= quiz[indexOn].answers[1];
        answerOption3= quiz[indexOn].answers[2];
       
        //CORRECT ANSWER
        correctAnswerDisplayed =  quiz[indexOn].correctAnswer;
    };
    // DISPLAY QUESTION ON THE HTML 
    showQuestions.textContent =  displayQuestion;
    
    //// TO DISPLAY ANSWER OPTIONS ////
    showAnswerOptions();
};

//// TO DISPLAY ANSWER OPTIONS ////
function showAnswerOptions(){
    
  var myOptionItems = [answerOption1, answerOption2, answerOption3];
    
  myOptionItems.forEach((item)=>{
    listOptions = document. createElement("li");
    button = document.createElement("BUTTON");
    button.setAttribute("class", "btn-lists");
    listOptions.appendChild(button);
    listOptions.setAttribute("class", "list-options");
    button.textContent = item;
    options.appendChild(listOptions);
    button.addEventListener("click", handleClick);
  })  
}

////SHOW ANSWER ////
function handleClick(event){
  
  if(event.target.tagName !== "BUTTON"){
      return;
  }
  var answerSelected = event.target.textContent;
  if (
      (indexOn == 0 && answerSelected === correctAnswerDisplayed) ||
      (indexOn == 1 && answerSelected === correctAnswerDisplayed) ||
      (indexOn == 2 && answerSelected === correctAnswerDisplayed) ||
      (indexOn == 3 && answerSelected === correctAnswerDisplayed)
    )
  {
      resultSection.textContent = "Correct!"
     
     // console.log(options);
  }else{
      resultSection.textContent = "Wrong!"
  };
}



 
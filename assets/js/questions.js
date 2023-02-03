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


scores = 0;

// To start quiz
startScreen = document.getElementById("start-screen");
startQuiz = document.getElementById("start");
showQuestionsTitle = document.getElementById("questions");
choices = document.getElementById("choices");
options = document.getElementById("options");
resultSection = document.getElementById("display-result");
showQuestions = document.getElementById("question-title");
listLists = document.querySelector(".order-lists");
timer = document.getElementById("time");
showQuizResult = document.getElementById("display-result");
endScreenDisplay = document.getElementById("end-screen");
scoreSection = document.getElementById("final-score");




    
var questionNumberDisplayed;
var answerOption1;
var answerOption2;
var answerOption3;
var displayQuestion; 
var correctAnswerDisplayed ;
var answerSelected ;
var currentQuestionIndex = 0;
var secondsLeft = quiz.length * 15;


startGame = startQuiz.addEventListener("click",  showQuiz);



//TO DISPLAY QUIZ 
function showQuiz(){
    
    startQuiz.classList.add("hide");
    showQuestionsTitle.classList.remove("hide"); 
    startScreen.remove();
    setQuestion();
    setQuestionTimer();
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

    options.innerHTML = ""
    var currentQuestion = quiz[currentQuestionIndex]

    displayQuestion = currentQuestion.question;
    
    //GETTING THE ANSWER OPTIONS
    answerOption1= currentQuestion.answers[0];
    answerOption2= currentQuestion.answers[1];
    answerOption3= currentQuestion.answers[2];
    
    //CORRECT ANSWER
    correctAnswerDisplayed =  currentQuestion.correctAnswer;
    
    // DISPLAY QUESTION ON THE HTML 
    showQuestions.textContent =  displayQuestion;
    
    //// TO DISPLAY ANSWER OPTIONS ////
    showAnswerOptions();
    return scores;
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
    return handleClick;
}

////SHOW ANSWER ////
function handleClick(event){
    
    if(event.target.tagName !== "BUTTON"){
        return;
    }
    var answerSelected = event.target.textContent;
    if (
        (currentQuestionIndex == 0 && answerSelected === correctAnswerDisplayed) ||
        (currentQuestionIndex == 1 && answerSelected === correctAnswerDisplayed) ||
        (currentQuestionIndex == 2 && answerSelected === correctAnswerDisplayed) ||
        (currentQuestionIndex == 3 && answerSelected === correctAnswerDisplayed)
    )
    {
        resultSection.textContent = "Correct!"
        scores++;
        localStorage.setItem("score", scores );
       
         
        // console.log(options);
    }else{
        resultSection.textContent = "Wrong!"
        secondsLeft = secondsLeft - 15;
        //console.log(secondsLeft);
    };
    currentQuestionIndex++

    if (currentQuestionIndex < quiz.length ){
    setQuestion()
    }else if(currentQuestionIndex > quiz.length || currentQuestionIndex > 0){
        endQuestion();
    }
}

function endQuestion(){

    if(currentQuestionIndex === quiz.length){
         secondsLeft = 0;
       timer.remove();
       showQuestionsTitle.remove();
       startScreen.remove();
       endOfquizScore();
    }
}

function endOfquizScore(){
    endScreenDisplay.setAttribute("class", "visible");
    finalScoreDisplay();
}

function finalScoreDisplay(){
scoreSection.textContent = localStorage.getItem("score");
}
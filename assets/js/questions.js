quiz = [
{
    question: "What tag is used to define a list Item in html?" , 
    answers: [
        " <ol> ",
        " <ul> ",
        " <li> "
    ], 
    correctAnswer: "3",
},
{
    question: "What statement is used to end a loop in javascript?" , 
    answers: [
        " Close statement ",
        " Break statement ",
        " Conditional statement "
    ], 
    correctAnswer: "2", 
},
{
    question: "What Javascript element that represent either TRUE or FALSE values?" , 
    answers: [
        "Boolean ",
        " String ",
        " Condition "
    ], 
    correctAnswer: "1",
},
{
    question: "In an HTML document, where is the title tag located?" , 
    answers: [
        " <Div> ",
        " <Head> " ,
        " <Header> "
    ], 
    correctAnswer: "2",
},
   
];


var scores = 0;

// To start quiz
startQuiz = document.getElementById("start");
startQuiz.addEventListener("click",  showQuiz);
showQuestionsTitle = document.getElementById("questions");
choices = document.getElementById("choices");
options = document.getElementById("options");
resultSection = document.getElementById("display-result");
btn = document.createElement("button");
showQuestions = document.getElementById("question-title");

var indexOn;
var answerOption1;
var answerOption2;
var answerOption3;
var displayQuestion; 
var correctAnswerDisplayed;





//TO DISPLAY QUIZ 
function showQuiz(){
    
    startQuiz.classList.add("hide");
    showQuestionsTitle.classList.remove("hide");  
    setQuestion();
    showAnswerOptions();
}



////TO DISPLAY QUESTIONS ////
function setQuestion(){

    for (let i = 0; i < quiz.length; i++){
    
        //let quesDisplay = quiz[i].question;
        indexOn = Math.floor(Math.random()* quiz.length);
        displayQuestion = quiz[indexOn].question

        //GETTING THE ANSWER OPTIONS
        answerOption1= quiz[indexOn].answers[0];
        answerOption2= quiz[indexOn].answers[1];
        answerOption3= quiz[indexOn].answers[2];
       
        //CORRECT ANSWER
        correctAnswerDisplayed = quiz[indexOn].correctAnswer;
    };
    // DISPLAY QUESTION ON THE HTML 
    showQuestions.textContent = displayQuestion; 
};


//// TO DISPLAY ANSWER OPTIONS ////
function showAnswerOptions(){
    
    // DISPLAY ANSWER OPTION 1
    var li1 = document.createElement("li");
    li1.setAttribute("event", "onclick");
    li1.textContent =  answerOption1;
    options.appendChild(li1);
    
    // DISPLAY ANSWER OPTION 2
    var  li2 = document.createElement("li");
    li2.textContent =  answerOption2;
    options.appendChild(li2);

    // DISPLAY ANSWER OPTION 3
    var  li3 = document.createElement("li");
    li3.textContent =  answerOption3;
    options.appendChild(li3);
}





//SHOW RESULT 
function showresult(){

}






//To show quiz result

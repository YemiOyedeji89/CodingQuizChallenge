quiz = [
{  
    
    question: "What tag is used to define a list Item in html?" , 
    answers: [
        "<ol>",
        "<ul>",
        "<li>"
    ], 
    correctAnswer: "<li>",
},
{   
   
    question: "What statement is used to end a loop in javascript?" , 
    answers: [
        "Close statement",
        "Break statement",
        "Conditional statement"
    ], 
    correctAnswer: "Break statement", 
},
{   
    
    question: "What Javascript element that represent either TRUE or FALSE values?" , 
    answers: [
        "Boolean",
        "String",
        "Condition"
    ], 
    correctAnswer: "Boolean",
},
{   
    
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
startQuiz.addEventListener("click",  showQuiz);
showQuestionsTitle = document.getElementById("questions");
choices = document.getElementById("choices");
options = document.getElementById("options");
resultSection = document.getElementById("display-result");
showQuestions = document.getElementById("question-title");
listLists = document.querySelector(".order-lists");


var indexOn;
//var questionNumber = 0;
var answerOption1;
var answerOption2;
var answerOption3;
var displayQuestion; 
var correctAnswerDisplayed ;
var answerSelected ;





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
        displayQuestion = quiz[indexOn].question;
        questionNumber = quiz[indexOn].number;
       
        //GETTING THE ANSWER OPTIONS
        answerOption1= quiz[indexOn].answers[0];
        answerOption2= quiz[indexOn].answers[1];
        answerOption3= quiz[indexOn].answers[2];
       
        
       
        //CORRECT ANSWER
        correctAnswerDisplayed =  quiz[indexOn].correctAnswer;
        
    };
    // DISPLAY QUESTION ON THE HTML 
    showQuestions.textContent = displayQuestion; 
    //console.log(correctAnswerDisplayed);
    //console.log(typeof (correctAnswerDisplayed));
};


//// TO DISPLAY ANSWER OPTIONS ////
function showAnswerOptions(){

    // DISPLAY ANSWER OPTION 1 AND ADDING BUTTON
    var  li1 = document.createElement("li");
    options.appendChild(li1);
    li1Btn = document.createElement("button");
    //li1Btn.setAttribute("button", "btn");
    li1Btn.setAttribute("id", "list-option1");
    li1Btn.textContent =  answerOption1;
    li1.appendChild(li1Btn);

    // DISPLAY ANSWER OPTION 2 AND ADDING BUTTON
    var  li2 = document.createElement("li");
    options.appendChild(li2);
    li2Btn = document.createElement("button");
    li2Btn.setAttribute("button", "btn");
    
    li2Btn.textContent =  answerOption2;
    li2.appendChild(li2Btn);

    // DISPLAY ANSWER OPTION 3 AND ADDING BUTTON
    var  li3 = document.createElement("li");
    options.appendChild(li3);
    li3Btn = document.createElement("button");
    li3Btn.setAttribute("button", "btn");
    li3Btn.textContent =  answerOption3;
    li3.appendChild(li3Btn);

    //console.log(li1Btn);
    
    
   

    //SELECTION ANSER OPTION
    
     listLists.addEventListener("click", answerUserSelect);
    //listLists.setAttribute("button", "onclick='answeruserSelect()'");
    function answerUserSelect (){
        
        
        //answerSelectedOption1 = li1Btn.textContent;

       console.log(indexOn);
        console.log(answerOption1);
        console.log(correctAnswerDisplayed); 
        console.log(listLists);
        
        
        
 

       // console.log(typeof( options)); 
        /* if (indexOn == 0 ){
            if (answerOption3 === correctAnswerDisplayed){
                resultSection.textContent = " Correct"
            }else {
                resultSection.textContent = " Wrong!"
            };
        }else if (indexOn == 1){
            if (answerOption2 === correctAnswerDisplayed){
                resultSection.textContent = " Correct"
            }else {
                resultSection.textContent = " Wrong!"
            };
        }else if (indexOn == 2){
            if (answerOption1 === correctAnswerDisplayed){
                resultSection.textContent = " Correct"
            }else {
                resultSection.textContent = " Wrong!"
            };
        }else{
            if (answerOption2 === correctAnswerDisplayed){
                resultSection.textContent = " Correct"
            }else {
                resultSection.textContent = " Wrong!"
            };
        };
         */
        
    }   
     
    
}

//ANSWER USER SELECTED 
function showresult(){
console.log("list one clicked")
}
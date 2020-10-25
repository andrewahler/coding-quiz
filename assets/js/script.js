function buildQuiz(){}
function showResults(){}
var timercount=60
var timerobject

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
let qhtml = document.getElementById("question");
let op1html = document.getElementById("option1")
let op2html = document.getElementById("option2")
let op3html = document.getElementById("option3")
let ushtml = document.getElementById("userscore")
let timerhtml = document.getElementById("timer")

submitButton.addEventListener('click', startQuiz);
op1html.addEventListener("click",checkresult);
op2html.addEventListener("click",checkresult);
op3html.addEventListener("click",checkresult);

quizContainer.style.display="none";
resultsContainer.style.display="none";
let right = 0;
let wrong = 0;
const myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Jason Richardson",
        b: "Alice Turner",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "What year was JavaScript invented?",
      answers: {
        a: "1998",
        b: "1997",
        c: "1995"
      },
      correctAnswer: "c"
    },
    {
      question: "What does API stand for?",
      answers: {
        a: "Angular percentage increment",
        b: "Annual Placement Incentive",
        c: "Application programming interface"
      },
      correctAnswer: "c"
    },
    {
      question: "What is Vanderbilt Universities mascot?",
      answers: {
        a: "Wildcat",
        b: "Commodore",
        c: "Volunteer"
      },
      correctAnswer: "b"


    }
  ];
  var currentQuestion=0
  //buildQuiz();
  function buildQuiz(){
    // op1html.style.display="block";

   console.log(myQuestions[currentQuestion], myQuestions[currentQuestion].answers.b)
  
    qhtml.textContent = myQuestions[currentQuestion].question;
    op1html.textContent = myQuestions[currentQuestion].answers.a;
    op2html.innerText = myQuestions[currentQuestion].answers.b;
    op3html.innerText = myQuestions[currentQuestion].answers.c;
    console.log(op1html)

    // let output = [];
  
    // myQuestions.forEach(
    //   (currentQuestion, questionNumber) => {
  
      
    //     const answers = [];
  
       
    //     for(letter in currentQuestion.answers){
  
        
    //       answers.push(
    //         `<label>
    //           <input type="radio" class="options" name="question${questionNumber}" value="${letter}">
    //           ${letter} :
    //           ${currentQuestion.answers[letter]}
    //         </label>`
    //       );
    //     }
  
        
    //     output.push(
    //       `<div class="question"> ${currentQuestion.question} </div>
    //       <div class="answers"> ${answers.join('')} </div>`
    //     );
    //   }
    // );
  
    // output+=`<button id="userresponse" onclick="showResults()">Submit Response</button>`
    // quizContainer.innerHTML = output
  }
  function showResults(){
    quizContainer.style.display="none";
    resultsContainer.style.display="block";
    clearInterval(timerobject)
    ushtml.textContent= "Right -"+right+" : Wrong -"+wrong

  }

  function checkresult(){

  let userchoice = this.value
  console.log(userchoice)
    if(userchoice == myQuestions[currentQuestion].correctAnswer){
      right++
    }
    else {
      wrong++
      timercount=timercount-5
    }
    if(currentQuestion < myQuestions.length-1){
      currentQuestion++
      buildQuiz()
    }
    else{
      showResults()
    }
  }
  function startQuiz(){
timerobject=setInterval(clockdisplay,1000)
submitButton.style.display="none";
quizContainer.style.display="block";
buildQuiz()


  }

  function clockdisplay(){
    timerhtml.textContent = timercount
    if( timercount > 0){
      timercount--
    }
    else{
      alert("Times UP!")
      showResults()
    }
  }
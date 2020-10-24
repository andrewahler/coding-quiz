function buildQuiz(){}
function showResults(){}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


buildQuiz();

submitButton.addEventListener('click', showResults);
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
        c: "Adjusted Price increase",
        d: "Application programming interface"
      },
      correctAnswer: "d"
    }
  ];
  function buildQuiz(){
    
    const output = [];
  
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
      
        const answers = [];
  
       
        for(letter in currentQuestion.answers){
  
        
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  

    quizContainer.innerHTML = output.join('');
  }
import { useState, useEffect } from 'react';
import './App.css';
import Questions from "./components/Questions";

// function App() {

//   const[showFinalResults, setFinalResults] = useState(false);
//   const[Score, setScore] = useState(0);
//   const[currentQuestion, setCurrentQuestion] = useState(0);
  
//   const nextQuestion = (isCorrect) => {
//     if(isCorrect){
//       setScore(Score + 1);
//     }
    
//     if(currentQuestion + 1 < question.length){
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setFinalResults(true);
//     }
//   }

//   const restartQuiz = () => {
//     setFinalResults(false);
//     setScore(0);
//     setCurrentQuestion(0);
//   }

//   return (
//     <div className="App">
//       <h1>QUIZ</h1>


//       {showFinalResults ? 
      
//       <div className='final-result'>
//           <h1>{Score} of {question.length} correct - ({((Score/question.length) * 100).toFixed(2)} %)</h1>
//           <button onClick={() => restartQuiz()}> Restart Game </button>
//       </div>
      
//       :
      
//       <Questions currentQuestion={currentQuestion} nextQuestion={nextQuestion} />
      
//       }
//     </div>
//   );
// }

function App() {

  const[showFinalResults, setFinalResults] = useState(false);
  const[Score, setScore] = useState(0);
  const[currentQuestion, setCurrentQuestion] = useState(0);
  const[questions, setQuestions] = useState([]);
  
  const nextQuestion = (isCorrect) => {
    if(isCorrect){
      setScore(Score + 1);
    }
    
    if(currentQuestion + 1 < questions.length){
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }
  }

  const restartQuiz = () => {
    setFinalResults(false);
    setScore(0);
    setCurrentQuestion(0);
  }

  const handleQuestions = (data) => {
    setQuestions(data);
  }

  return (
    <div className="App">
      <h1>QUIZ</h1>


      {showFinalResults ? 
      
      <div className='final-result'>
          <h1>{Score} of {questions.length} correct - ({((Score/questions.length) * 100).toFixed(2)} %)</h1>
          <button onClick={() => restartQuiz()}> Restart Game </button>
      </div>
      
      :
      
      <Questions currentQuestion={currentQuestion} nextQuestion={nextQuestion} handleQuestions={handleQuestions} />
      
      }
    </div>
  );
}


export default App;

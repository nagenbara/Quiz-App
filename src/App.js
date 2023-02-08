import { useState } from 'react';
import './App.css';

function App() {

  const[showFinalResults, setFinalResults] = useState(false);
  const[Score, setScore] = useState(0);
  const[currentQuestion, setCurrentQuestion] = useState(0);
  
  const question =[
    {
      "text": "Apa Kepanjangan PETA?",
      "options": [
        { "id": 0, "text": "Pembela Tanah Air", "isCorrect": true },
        { "id": 1, "text": "Pembela Tanah Aku", "isCorrect": false },
        { "id": 2, "text": "Pembuat Tanah Air", "isCorrect": false },
        { "id": 3, "text": "Pemersatu Tanah Air", "isCorrect": false }
      ]
    },
    {
      "text": "Siapa Presiden Pertama Indonesia?",
      "options": [
        { "id": 0, "text": "Ir. Soekarno", "isCorrect": true },
        { "id": 1, "text": "Joko Widodo", "isCorrect": false },
        { "id": 2, "text": "B.J. Habibie", "isCorrect": false },
        { "id": 3, "text": "Megawati Soekarno Putri", "isCorrect": false }
      ]
    },
    {
      "text": "Kapan Indonesia Merdeka?",
      "options": [
        { "id": 0, "text": "17 Agustus 1943", "isCorrect": false },
        { "id": 1, "text": "17 Agustus 1944", "isCorrect": false },
        { "id": 2, "text": "17 Agustus 1945", "isCorrect": true },
        { "id": 3, "text": "17 Agustus 1946", "isCorrect": false }
      ]
    },
    {
      "text": "Di Mana Pulau Ibu Kota Baru Indonesia?",
      "options": [
        { "id": 0, "text": "Jawa", "isCorrect": false },
        { "id": 1, "text": "Kalimantan", "isCorrect": true },
        { "id": 2, "text": "Sulawesi", "isCorrect": false },
        { "id": 3, "text": "Sumatra", "isCorrect": false }
      ]
    },
    {
      "text": "Di Mana Pulau Ibu Kota Baru Indonesia?",
      "options": [
        { "id": 0, "text": "Jawa", "isCorrect": false },
        { "id": 1, "text": "Kalimantan", "isCorrect": true },
        { "id": 2, "text": "Sulawesi", "isCorrect": false },
        { "id": 3, "text": "Sumatra", "isCorrect": false }
      ]
    },
    {
      "text": "Kota Mana yang Dijuluki sebagai 'Kota Kembang'?",
      "options": [
        { "id": 0, "text": "Bandung", "isCorrect": true },
        { "id": 1, "text": "Bogor", "isCorrect": false },
        { "id": 2, "text": "Aceh", "isCorrect": false },
        { "id": 3, "text": "Yogyakarta", "isCorrect": false }
      ]
    }
  ]
  
  const nextQuestion = (isCorrect) => {
    if(isCorrect){
      setScore(Score + 1);
    }
    
    if(currentQuestion + 1 < question.length){
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

  return (
    <div className="App">
      <h1>QUIZ</h1>


      {showFinalResults ? 
      
      <div className='final-result'>
          <h1>{Score} of {question.length} correct - ({((Score/question.length) * 100).toFixed(2)} %)</h1>
          <button onClick={() => restartQuiz()}> Restart Game </button>
      </div>
      
      :
      
      <div className='card-question'>
          <h2>Question {currentQuestion + 1} of {question.length}</h2>
          <h3 className='question'>{question[currentQuestion].text}</h3>

          <ul>
            {question[currentQuestion].options.map((option) => {
              return (
                <li onClick={() => nextQuestion(option.isCorrect)} key={option.id}>{option.text}</li>
              )
            })}
          </ul>
      </div>
      
      }
    </div>
  );
}

export default App;

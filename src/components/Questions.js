import { useState, useEffect } from 'react';

const Questions = (props) => {

    const [question, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    try {
      const response = await fetch("http://localhost:8080/Questions");
      const data = await response.json();
      const limitedAndShuffledData = data
            .sort(() => Math.random() - 0.5)
            .slice(0, 5);
      setQuestions(limitedAndShuffledData);
      props.handleQuestions(limitedAndShuffledData);
    } catch (error) {
      console.error(error);
    }
  }

  return(
    <div className='card-question'>
      <h2>Question {props.currentQuestion + 1} of {question.length}</h2>
      <h3 className='question'>{question[props.currentQuestion] ? question[props.currentQuestion].text : 'Loading...'}</h3>
      

        <ul>
            {question[props.currentQuestion] && question[props.currentQuestion].options.map((option) => {
                return (
                <li onClick={() => props.nextQuestion(option.isCorrect)} key={option.id}>{option.text}</li>
                )
            })}
        </ul>
    </div>
    )

}

export default Questions
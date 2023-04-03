
import React, {useState} from 'react';
import data from './data';
import Question from './Question';

 
function App() {

  const [questions, setQuestions] = useState(data);
  const[idFlag, setIdFlag] = useState(null);

  const toggleAnswer = (id) => {
    setIdFlag(id);
  }

  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
            {
              questions.map((question) => {
                  return (
                    <Question key={question.id} {...question} toggleAnswer={toggleAnswer} idFlag={idFlag}/>
                  )
              })
            }
        </section>
      </div>
    </main>
  );
}

export default App;

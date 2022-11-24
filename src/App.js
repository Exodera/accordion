import React, { useState } from 'react';
import data from './data';
import Question from './Question';
import SingleQuestion from './Question';
function App() {
  const[questions, setQuestions]= useState(data)
  return (
  <main>
    <div className='container'>
      <h3>Questions and answers about loggining in</h3>
      <section className='info'>
        {questions.map((idata)=>{
          return <SingleQuestion   data={idata} key={idata.id}/>
        })}
    </section>
    </div>
  </main>
  )
} 

export default App;

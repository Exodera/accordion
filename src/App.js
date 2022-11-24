import React, { useState } from 'react';
import data from './data';
import Question from './Question';
import SingleQuestion from './Question';
function App() {
  return (
  <main>
    <section>
    {data.map((idata)=>{
      return <Question data={idata}/>
    })}


    </section>
    
  </main>
  )
} 

export default App;

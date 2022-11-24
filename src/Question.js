import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({data}) => {
  const [display, setDisplay] = useState(false);

  return(
   <article className='question'>
    <header>
      <h4>{data.title}</h4>
      <button className='btn' onClick={()=>setDisplay(!display)}>
        {display? <AiOutlineMinus/>: <AiOutlinePlus/> }
      </button>
    </header>
    <p>{display?data.info:data.info.substring(0,0)}</p>

   </article>
  )
};

export default Question;

import React from 'react';

const QuizButton = ({button, question, handleAns}) => {
    
    return (
        <div>
            <input onClick={()=>handleAns(button)} type="radio" id={button} name={question} value={button}/>
            <label className='pl-3' htmlFor={button}>{button}</label>
            {/* onClick={()=> handleAns(options)} */}
        </div>
    );
};

export default QuizButton;
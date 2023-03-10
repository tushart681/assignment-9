import { useEffect, useState } from 'react';
import QuizButton from './QuizButton';

const QuizTest = ({questions, ans, setAns}) => {
    const {question, correctAnswer, id, options } = questions;
    const [rightAns, setRightAns] = useState(false)
    const handleAns = button => {
        if(button === correctAnswer){
            setRightAns(true)
            alert('your ans is right')
        }
        else{
            alert('your ans is wrong')
        }
    }
    useEffect(()=>{
        setAns(ans + 1)
    },[rightAns])
    const [icon, setIcon] = useState(false)
    const handleIcon = (icon) => {
        if(icon === false){
            setIcon(true)
        }
        else{
            setIcon(false)
        }
    }

    
    return (
        <div >
            <div>
            <h1>{question}</h1>
            <button onClick={()=> handleIcon(icon)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
</svg><p className={icon ? 'block' : 'hidden'}>Answer: {correctAnswer}</p></button>
            <div className='flex flex-col'>
            {
              options.map(button => <QuizButton key={button} handleAns={handleAns} question={question} button ={button}></QuizButton>)  
            }
            </div>
            </div>
        </div>
    );
};

export default QuizTest;
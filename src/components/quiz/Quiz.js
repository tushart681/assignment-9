import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTest from './quizTesr/QuizTest';

const Quiz = () => {
    const {data} = useLoaderData()
    const questions = data.questions
    const [ans, setAns] = useState(-1)
    
    

    return (
        <div>
            <h1>currect ans is: {ans}</h1>
            <div className=' justify-center items-center mt-8 grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
            {
                questions.map(quizes => <QuizTest key={quizes.id} questions={quizes} ans={ans} setAns={setAns}></QuizTest>)
            }
        </div>
        </div>
    );
};

export default Quiz;
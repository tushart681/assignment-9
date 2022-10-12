import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from './cart/Cart';
import image from './images/istockphoto-1268465415-612x612.jpg'

const Home = () => {
    const {data} = useLoaderData()
    const [quiz, setQuiz] = useState([])
    return (
        <div>
           <div>
           <div className='flex justify-center gap-4 items-center mt-8'>
           <img className='h-64 w-64' src={image} alt="" />
           <p>quiz, a contest in which participants test what they know by answering questions on one or more topics.</p>
           </div>
           <div className='grid grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1 '>
           {
            data.map(quizCard => <Cart key={quizCard.id} quizCard={quizCard}></Cart>)
           }
           </div>
           </div>
        </div>
    );
};

export default Home;
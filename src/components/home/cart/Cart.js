import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({quizCard}) => {
    const {id, name, logo} = quizCard;
    return (
        <div className='border-2 bg-slate-500 rounded border-orange-600 mt-4 mx-4'>
            <div>
            <img className='h-64 w-64' src={logo} alt="" />
            <div className='flex gap-4 justify-center'>
            <p>{name}</p>
            <Link to={`/${name}/${id}`}><button className='font-bold text-cyan-500'>Start Test</button></Link>
            </div>
            </div>
        </div>
    );
};

export default Cart;
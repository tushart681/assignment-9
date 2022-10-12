import React from 'react';
import { Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-between items-center mx-6 my-4'>
            <div>
            <h1 className='text-red-900 text-xl font-bold'>QUIZ Clothing</h1>
            </div>
            <div className='flex font-bold gap-4 text-xl'>
            <Link className='hover:bg-sky-700' to='/home'>Home</Link>
            <Link className='hover:bg-sky-700' to='/topics'>Topics</Link>
            <Link className='text-lime-600' to='/statics'>Statics</Link>
            <Link className='hover:bg-sky-700' to='/blogs'>Blogs</Link>
            </div>
        </nav>
    );
};

export default Header;
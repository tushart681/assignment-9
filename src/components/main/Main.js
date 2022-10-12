import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../header/Header';

const Main = () => {
    return (
        <div>
            <div>
            <Header></Header>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;
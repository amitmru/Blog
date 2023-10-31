import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../componemt/Header/Header';
import Footer from '../componemt/Footer/Footer';
import Home from '../conatiners/Home/Home';

function UserRoute(props) {
    return (
        <div>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default UserRoute;
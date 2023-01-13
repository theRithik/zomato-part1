import React from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';

const Routing=()=>{
    return (
        <BrowserRouter>
        <Header/>
        <Route exact path='/' component={Home}/>
        <Footer/>
        </BrowserRouter>
        )
}
export default Routing;
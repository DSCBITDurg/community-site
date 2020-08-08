import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


// import component
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import pages
import HomePage from './pages/HomePage';


export default function Router() {
    return (
        
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
        
    );
}


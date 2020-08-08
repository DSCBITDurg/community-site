import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import urls from './urls';

// import component

// import pages
import HomePage from './pages/HomePage'


function Router({children}) {
    return (
        
            <BrowserRouter>
                {children}
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                </Switch>
            </BrowserRouter>
        
    );
}

export default Router;

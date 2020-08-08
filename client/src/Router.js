import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


// import component

// import pages
import HomePage from './pages/HomePage';


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

Router.propTypes = {
    children: PropTypes.node
};

export default Router;

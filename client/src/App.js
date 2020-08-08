import React from 'react';
import Router from './Router';


import Header from './components/Header/Header';

// import css file
import './assets/css/global.css';

function App() {
    return (
        <Router>
            <Header/>
        </Router>
    );
}

export default App;

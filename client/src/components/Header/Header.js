import React from 'react';

//import components
import Navbar from '../Navbar/Navbar';

//import styles
import styles from './Header.module.css';

export default function Header(){
    return(
        <div className={styles.headerContainer}>
            <div className={styles.dscLogo}>LOGO</div>
            <Navbar/>
        </div>
    );
}
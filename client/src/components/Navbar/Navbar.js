import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar(){
    return(
        <div className={styles.navbarContainer}>
            <div className={styles.linksContainer}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
                <a href="#">Events</a>
            </div>

            <div className={styles.buttonsContainer}>
                <a href="#">CollabIcon</a>
                <a href="#">BadgeIcon</a>
                <a href="#">UserIcon</a>
            </div>
        </div>
    );
}
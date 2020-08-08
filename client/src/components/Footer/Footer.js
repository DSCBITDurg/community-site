import React from 'react';

//import components


//import styles
import styles from './Footer.module.css';

export default function Footer(){
    return(
        <div className={styles.footerContainer}>
            
            <div className={styles.footerMain}>
                <div className={styles.dscIcons}>
                    <p>icon 1</p>
                    <p>icon 2</p>
                </div>

                <div className={styles.links}>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>
                    <a href="#">Events</a>
                </div>

                <div className={styles.features}>
                    <a href="#">Collab Tool</a>
                    <a href="#">My Badges</a>
                </div>

                <div className={styles.eventsAndUs}>
                    <a href="#">Our Team</a>
                    <a href="#">Upcomming Events</a>
                    <a href="#">Past Events</a>
                    <a href="#">Gallary</a>
                </div>
            </div>

            <div className={styles.socialHandles}>
                <div className={styles.socialIcons}>
                    <p>Social Handles</p>
                    <p>icon 1</p>
                    <p>icon 2</p>
                </div>
                <div className={styles.email}>
                    <p>Email: bitdsc@gmail.com</p>
                </div>
            </div>
        </div>
    );
}
import React from 'react';
import styles from './Navbar.module.css';


//import icons
import PersonIcon from '@material-ui/icons/Person';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

export default function Navbar(){
    return(
        <div className={styles.navbarContainer}>
            <div className={styles.linksContainer}>
                <a href="#" className={styles.activeLink}>Home</a>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
                <a href="#">Events</a>
            </div>

            <div className={styles.buttonsContainer}>
                <a href="#"><GroupAddIcon fontSize="large"/></a>
                <a href="#"><CardMembershipIcon fontSize="large"/></a>
                <a href="#"><PersonIcon fontSize="large"/></a>
            </div>
        </div>
    );
}
import React from 'react';
import styles from './Navbar.module.css';
import {Link} from 'react-router-dom';

//import icons
import PersonIcon from '@material-ui/icons/Person';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

export default function Navbar(){
    return(
        <div className={styles.navbarContainer}>
            <div className={styles.linksContainer}>
                <Link to="/" className={styles.activeLink}>Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/events">Events</Link>
            </div>

            <div className={styles.buttonsContainer}>
                <Link to="/collab"><GroupAddIcon fontSize="large"/></Link>
                <Link to="/badges"><CardMembershipIcon fontSize="large"/></Link>
                <Link to="/user"><PersonIcon fontSize="large"/></Link>
            </div>
        </div>
    );
}
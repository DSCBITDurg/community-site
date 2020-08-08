import React from 'react';
import PropTypes from 'prop-types';
//import images

//import components

//import styles
import styles from './Layout.module.css';

export default function Layout({children}){
    return(
        <div className={styles.container}>
            {children}
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node
} 
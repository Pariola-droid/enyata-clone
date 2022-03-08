import React, { Component } from "react"
// import { Link } from 'react-router-dom'

import styles from "../styles/general/header.module.scss";


class Header extends Component{   

    render(){
        return(
            <div>
                <header className={styles.header}>
                    <div className={styles.wrapper}>
                        <div className={styles.content}>
                            <div className={styles.title}>
                                Curious about the work we’ve done in the past? Have a look.
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;
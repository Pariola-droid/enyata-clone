import React, { Component } from "react"
import Link from "next/link";

import styles from "../styles/home/header.module.scss";


class Header extends Component{   

    render(){
        return(
            <div>
                <header className={styles.header}>
                        <div className={styles.wrapper}>
                            <div className={styles.inWrap}>
                                
                                <div className={styles.motifH}>
                                    <img src="/motif.svg" alt=""/>
                                </div>

                                <div className={styles.wText}>
                                    <h1>
                                        Build and ship products efficiently with Enyata
                                    </h1>

                                    <p>
                                        Leverage Enyata's world-class engineering teams to get your ideas and projects up and running quickly.
                                    </p>

                                    <Link href="/contact-us">
                                        get started
                                    </Link>
                                </div>

                                <div className={styles.wImage}>
                                    <img src="/orange-dots.svg" className={styles.img} alt="" />
                                    <img src="/hero-graph.svg" className={styles.img} alt=""/>                                    
                                    <img src="/hero-image.png" className={styles.img} alt="" />
                                    
                                    <div className={styles.checkT}>
                                        <img src="/hero-check.svg" alt="" />
                                        <p>Best in class engineering for the finest ideas.</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </header>
            </div>
        );
    }
}

export default Header;
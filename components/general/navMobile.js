import React, {Component} from "react"
import Link from "next/link";

import styles from "../styles/general/nav_mobile.module.scss";

class NavMobile extends Component{
    constructor (props){
        super(props)

        this.state = {
            navOpen: false
        }
    }
    
    
    openMobileNav(){
        this.setState({
            navOpen: true
        })
        document.getElementsByClassName(styles.navM)[0].style.transform="scale(1)"
    }
    closeMobileNav(){
        this.setState({
            navOpen: false
        })
        document.getElementsByClassName(styles.navM)[0].style.transform="scale(0)"
    }


    render(){
        return(
            <div>
                <nav className={styles.navbar}>
                    <div className={styles.navInner}>                        
                        <div className={styles.navLogo}>
                            <Link href="/">
                                <img src="/enyata-purple.svg" alt="" />
                            </Link>    
                        </div>
                        
                        {
                            this.state.navOpen === false
                                ?
                                <div onClick={() => this.openMobileNav()} className={styles.menuI}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                :
                                <svg onClick={() => this.closeMobileNav()} width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 10.1734L22.9 0.273438L25.728 3.10144L15.828 13.0014L25.728 22.9014L22.9 25.7294L13 15.8294L3.09997 25.7294L0.271973 22.9014L10.172 13.0014L0.271973 3.10144L3.09997 0.273438L13 10.1734Z" fill="currentColor" />
                                </svg>
                        }

                        <div className={styles.navM}>
                            <div className={styles.content}>
                                <div className={styles.top}>
                                    <svg onClick={() => this.closeMobileNav()} width="12" height="12" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 10.1734L22.9 0.273438L25.728 3.10144L15.828 13.0014L25.728 22.9014L22.9 25.7294L13 15.8294L3.09997 25.7294L0.271973 22.9014L10.172 13.0014L0.271973 3.10144L3.09997 0.273438L13 10.1734Z" fill="currentColor" />
                                    </svg>
                                </div>

                                <div className={styles.links}>
                                    <Link onClick={() => this.closeMobileNav()} href="/">Home</Link>
                                    <Link onClick={() => this.closeMobileNav()} href="/about-us">About us</Link>
                                    <Link onClick={() => this.closeMobileNav()} href="/showcase">Showcase</Link>
                                    <Link onClick={() => this.closeMobileNav()} href="/contact-us">Contact</Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavMobile;




{/*<div>
                                <Link onClick={() => this.closeMobileNav()} href="/">Home</Link>
                            </div>
                            <div>
                                <Link onClick={() => this.closeMobileNav()} href="/about-us">About us</Link>
                            </div>
                            <div>
                                <Link onClick={() => this.closeMobileNav()} href="/showcase">Showcase</Link>
                            </div>
                            <div>
                                <Link onClick={() => this.closeMobileNav()} href="/contact-us">Contact</Link>
</div>*/}
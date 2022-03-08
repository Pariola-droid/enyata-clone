import React, {Component} from "react"
import Link from "next/link";

import styles from "../styles/general/navOther.module.scss";

class NavOther extends Component{   

    render(){
        return(
            <div>
                <nav className={styles.navbar} id="klas">
                    <div className={styles.navInner}>                        
                        <div className={styles.navLogo}>
                            <Link href="/">
                                <img src="/regnify-blue.png" alt="" />
                            </Link>   
                        </div>
                        
                        <ul className={styles.navList}>
                            <li>
                                <Link href="/about-us">about us</Link>
                            </li>
                            <li>
                                <Link href="/showcase">showcase</Link>
                            </li>
                            <li>
                                <Link href="/contact-us">contact</Link>
                            </li>
                            <li>
                                <Link href="/contact-us" className={styles.a}>Work with us</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavOther;
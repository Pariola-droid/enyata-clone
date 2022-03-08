import React, { Component } from "react"
import Link from "next/link";

import styles from "../styles/home/footer.module.scss";

class Footer extends Component{   

    render(){
        return(
            <div>
                <footer id={styles.footer}>
                   <div className={styles.motifF}>
                        <img src="/footer-motif.svg" alt=""/>
                    </div>

                   <div className={styles.wrapper}>
                        <div className={styles.brandF}>
                            <div className={styles.logoF}>
                                <img src="/enyata-white.svg" alt=""/>
                            </div>
                            <div className={styles.descF}>
                                Leverage Regnify's world-class engineering teams to get your  projects up and running quickly.
                            </div>
                        </div>

                        <div className={styles.companyF}>
                            <div className={styles.title}>
                                company
                            </div>

                            <ul className={styles.linksF}>
                                <li>
                                    <Link href="/">team</Link>
                                </li>
                                <li>
                                    <Link href="/about-us">about us</Link>
                                </li>
                                <li>
                                    <Link href="/showcase">showcase</Link>
                                </li>
                                <li>
                                    <Link href="/">resources</Link>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.contactF}>
                            <div className={styles.title}>
                                contact
                            </div>

                            <div className={styles.contentF}>
                                <p>Feel free to get in touch with us.</p>
                                <a href="tel:+234 (810) 759 5941" className={styles.footer_phone}>+234 (810) 759 5941</a>
        <a href="mailto:partnerships@enyata.com" className={styles.footer_mail}>partnerships@enyata.com</a>
                            </div>
                        </div>
                    </div>


                    <div className={styles.foot}>
                        <div className={styles.copy}>
                            Cloned by @ <a href="https://pariola.dev" style={{color: '#f5f5f5', textDecoration: 'underline'}}>Pariola</a> 2022 
                        </div>

                        <div className={styles.social}>
                            <a href="https://twitter.com/EnyataCommunity" target="_blank" rel="noreferrer noopener"><svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.618 2.376c-.905.39-1.89.671-2.905.78a5.032 5.032 0 0 0 2.219-2.78 9.96 9.96 0 0 1-3.201 1.219A5.033 5.033 0 0 0 17.044 0 5.044 5.044 0 0 0 12 5.047c0 .39.047.781.124 1.157A14.337 14.337 0 0 1 1.722.924a5.01 5.01 0 0 0-.686 2.546c0 1.752.89 3.296 2.248 4.205a5.089 5.089 0 0 1-2.281-.642v.062a5.046 5.046 0 0 0 4.044 4.952 5.34 5.34 0 0 1-1.328.172c-.328 0-.64-.033-.953-.077.64 2 2.5 3.453 4.716 3.5a10.111 10.111 0 0 1-6.263 2.157c-.423 0-.814-.015-1.219-.062A14.286 14.286 0 0 0 7.749 20c9.278 0 14.355-7.686 14.355-14.358 0-.219 0-.438-.015-.657a10.865 10.865 0 0 0 2.53-2.61z" fill="#fff"></path></svg></a>

                            <a href="https://www.facebook.com/Enyata.Community/" target="_blank" rel="noreferrer noopener"><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.616 0C5.094 0 .617 4.477.617 9.999c0 4.99 3.656 9.126 8.437 9.879V12.89h-2.54V9.999h2.54V7.796c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988c4.781-.749 8.437-4.886 8.437-9.877C20.615 4.477 16.138 0 10.616 0z" fill="#fff"></path></svg></a>

                            <a href="https://www.instagram.com/enyata.community/" target="_blank" rel="noreferrer noopener"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.998 6.665A3.342 3.342 0 0 0 6.663 10a3.342 3.342 0 0 0 3.335 3.335A3.342 3.342 0 0 0 13.332 10a3.342 3.342 0 0 0-3.335-3.335zM19.998 10c0-1.38.013-2.75-.065-4.128-.077-1.6-.443-3.022-1.613-4.193C17.147.506 15.729.143 14.128.066 12.747-.012 11.378 0 10 0 8.62 0 7.25-.012 5.872.066 4.272.143 2.85.509 1.68 1.679.506 2.853.143 4.271.066 5.872-.012 7.253 0 8.622 0 10c0 1.378-.013 2.75.065 4.128.077 1.6.443 3.022 1.613 4.193 1.174 1.173 2.592 1.536 4.193 1.613C7.253 20.012 8.622 20 10 20c1.38 0 2.75.013 4.128-.065 1.6-.077 3.022-.443 4.193-1.613 1.173-1.174 1.536-2.592 1.613-4.193.08-1.379.065-2.747.065-4.128zM9.998 15.131A5.124 5.124 0 0 1 4.867 10a5.124 5.124 0 0 1 5.13-5.131A5.124 5.124 0 0 1 15.13 10a5.124 5.124 0 0 1-5.131 5.131zm5.34-9.274A1.197 1.197 0 0 1 14.14 4.66c0-.663.536-1.198 1.199-1.198a1.197 1.197 0 0 1 .847 2.046 1.196 1.196 0 0 1-.847.35z" fill="#fff"></path></svg></a>
                        </div>
                    </div>


                </footer>
            </div>
        );
    }
}

export default Footer;
import React, { Component } from 'react'
import Head from 'next/head';
// import {Link} from 'react-router-dom'

import NavOther from '../components/general/NavOther'
import NavMobile from '../components/general/navMobile'
import Footer from '../components/home/Footer'

import dots from "../assets/images/orange-dots.svg"

import styles from '../styles/contact/contact.module.scss'

class Contact extends Component{


    render(){
        return(
            <div>
                <Head>
                    <title>Regnify</title>
                    <meta name="Klas" content="Klas" content="Remote teaching platform for creating engaging online classes anywhere, anytime. Share and monetize your knowledge." />
                    <link rel="icon" href="/klas.svg" />
                </Head>
                
                <NavOther />
                <NavMobile />

                <main>
                    <section className={styles.contact}>
                        <div className={styles.wrapper}>
                            <div className={styles.cContent}>
                                <div className={styles.formHouse}>
                                    <div className={styles._tag}>
                                        WORK WITH US
                                    </div>

                                    <div className={styles.title}>
                                        Let's build something awesome together
                                    </div>

                                    <div className={styles.form}>
                                        <form>
                                            <div className={styles.input_container}>
                                                <div className={styles.input_content}>
                                                <input name="name" type="text" placeholder="Your name" />
                                                <label>Your email</label>
                                                </div>
                                            </div>

                                            <div className={styles.input_container}>
                                                <div className={styles.input_content}>
                                                <input name="email" type="email" placeholder="Your email" />
                                                <label>Your email</label>
                                                </div>
                                            </div>

                                            <div className={styles.input_container}>
                                                <div className={styles.input_content}>
                                                    <select name="project_type" placeholder="Project Type">
                                                        <option> Project Type </option>
                                                        <option value="web-app"> Web Application </option>
                                                        <option value="mobile-app"> Mobile Application </option>
                                                        <option value="desktop-app"> Desktop Application </option>
                                                        <option value="data-science"> Data Science &amp; Engineering </option>
                                                        <option value="product-design"> Product Design </option>
                                                        <option value="devops"> DevOps </option>
                                                        <option value="others"> Others </option>
                                                    </select>
                                                    <label>Project Type</label>
                                                </div>
                                                <div>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 7.5l5 5 5-5" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                </div>
                                            </div>
                                            
                                            <div className={styles.input_container}>
                                                <div className={styles.input_content}>
                                                    <select name="budget" placeholder="Budget">
                                                        <option> Budget </option>
                                                        <option value="web-app"> $10,000 - $30,000 </option>
                                                        <option value="mobile-app"> $30,000 - $50,000 </option>
                                                        <option value="desktop-app"> $50,000 - $100,000 </option>
                                                        <option value="data-science"> $100,000 and above </option>
                                                        <option value="product-design"> Others </option>
                                                    </select>
                                                    <label>Budget</label>
                                                </div>
                                                <div>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 7.5l5 5 5-5" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                </div>
                                            </div>

                                            <div className={styles.input_container}>
                                                <div className={styles.message}>
                                                    <textarea name="about" placeholder="Tell us a bit about what you're trying to do">
                                                    </textarea>
                                                    <label>Project Summary</label>
                                                </div>
                                            </div>

                                            <button>
                                                shoot
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.cInfo}>
                                <div className={styles.info_wrapper}>
                                    <img src={dots} alt="" className={styles.dots} />

                                    <div className={styles.info}>
                                        <div className={styles.info_item}>
                                            <div className={styles.icon}>
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.66 1.333H6.008c-.741 0-1.34.6-1.34 1.34v3.758L1.532 9.526A.667.667 0 0 0 2 10.666V14c0 .369.298.667.667.667h10.666A.666.666 0 0 0 14 14V2.673c0-.74-.599-1.34-1.34-1.34zm-5.379 8.74V13.334H3.333V9.621l1.992-1.966L7.28 9.657v.417zM8.667 6H7.333V4.667h1.334V6zm2.666 5.333H10V10h1.333v1.333zm0-2.666H10V7.333h1.333v1.334zm0-2.667H10V4.667h1.333V6z" fill="#F16A6A">
                                                    </path>
                                                    <path d="M4.667 10H6v1.333H4.667V10z" fill="#F16A6A"></path>
                                                </svg>
                                            </div>

                                            <div>
                                                <div className={styles.item_title}>Pay us a visit</div>
                                                <div className={styles.item_desc}>371 Agege Motor Road,<br/>Challenge Plaza, Challenge Bus stop,<br/>Papa Ajao, Lagos.<br/>Lagos, Nigeria
                                                </div>
                                            </div>
                                            </div>    
                                                    
                                        <div className={styles.info_item}>
                                            <div className={styles.icon}>
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.658 9.427l-2.71-2.464a.667.667 0 0 0-.927.028L6.425 8.632c-.384-.073-1.156-.314-1.95-1.107-.795-.795-1.036-1.569-1.107-1.95l1.64-1.596c.258-.25.27-.66.028-.928L2.573.342a.666.666 0 0 0-.928-.058L.2 1.524a.667.667 0 0 0-.194.433c-.01.167-.2 4.115 2.86 7.178C5.538 11.805 8.883 12 9.804 12c.135 0 .218-.004.24-.005a.66.66 0 0 0 .432-.194l1.24-1.448a.665.665 0 0 0-.057-.926z" fill="#7557D3">
                                                </path>
                                                </svg>
                                            </div>
                                            <div>
                                                <div className={styles.item_title}>Or drop us a line</div>
                                                <div className={styles.item_desc}>
                                                    <a href="mailto:partnerships@enyata.com">partnerships@enyata.com</a>
                                                        <br/>
                                                    <a href="tel:+2348107595941">+234 810 7595 941</a>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                     
                </main>                

                <Footer />

            </div>
        )
    }
}

export default Contact;
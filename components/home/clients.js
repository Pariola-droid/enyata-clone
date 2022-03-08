import React, { Component } from "react"
// import { Link } from 'react-router-dom'

import styles from "../styles/home/clients.module.scss";

class Clients extends Component{   

    render(){
        return(
            <div>
                <section className={styles.clients}>
                        <div className={styles.wrapper}>
                            <div className={styles._tag}>
                                OUR CLIENTS
                            </div>

                            <div className={styles.client_content}>
                                <div className={styles.title}>
                                    Don’t take our word for it, here’s what our partners think
                                </div>
                            </div>

                            <div className={styles.testimony}>
                                <div className={styles.test}>
                                    <div className={styles.item}>
                                        <div className={styles.message}>
                                            The accuracy in which they quickly understood what we were trying to build was very impressive.Both the system and app have met our expectations and functions successfully.
                                        </div>

                                        <div className={styles.author}>
                                            <div className={styles.aImg}>
                                                <img src="/James.png" alt=""/>
                                            </div>
                                            <div className={styles.aID}>
                                                <div className={styles.aName}>
                                                    James Schuler
                                                </div>
                                                <div className={styles.aProf}>
                                                    CTO, Kafene
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.item}>
                                        <div className={styles.message}>
                                            The accuracy in which they quickly understood what we were trying to build was very impressive.Both the system and app have met our expectations and functions successfully.
                                        </div>

                                        <div className={styles.author}>
                                            <div className={styles.aImg}>
                                                <img src="/James.png" alt=""/>
                                            </div>
                                            <div className={styles.aID}>
                                                <div className={styles.aName}>
                                                    James Schuler
                                                </div>
                                                <div className={styles.aProf}>
                                                    CTO, Kafene
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.test}>
                                    <div className={styles.item}>
                                        <div className={styles.message}>
                                            The accuracy in which they quickly understood what we were trying to build was very impressive.Both the system and app have met our expectations and functions successfully.
                                        </div>

                                        <div className={styles.author}>
                                            <div className={styles.aImg}>
                                                <img src="/James.png" alt=""/>
                                            </div>
                                            <div className={styles.aID}>
                                                <div className={styles.aName}>
                                                    James Schuler
                                                </div>
                                                <div className={styles.aProf}>
                                                    CTO, Kafene
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.item}>
                                        <div className={styles.message}>
                                            The accuracy in which they quickly understood what we were trying to build was very impressive.Both the system and app have met our expectations and functions successfully.
                                        </div>

                                        <div className={styles.author}>
                                            <div className={styles.aImg}>
                                                <img src="/James.png" alt=""/>
                                            </div>
                                            <div className={styles.aID}>
                                                <div className={styles.aName}>
                                                    James Schuler
                                                </div>
                                                <div className={styles.aProf}>
                                                    CTO, Kafene
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
        );
    }
}

export default Clients;
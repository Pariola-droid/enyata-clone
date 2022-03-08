import React, { Component } from "react"
// import { Link } from 'react-router-dom'

import styles from "../styles/home/why_us.module.scss";

import world from "../../assets/images/world-class.svg"
import rocket from "../../assets/images/rocket.svg"
import scale from "../../assets/images/scale.svg"
import verified from "../../assets/images/verified.svg"

class WhyUs extends Component{   

    render(){
        return(
            <div>
                <section className={styles.why_us}>
                        <div className={styles.wrapper}>
                            <div className={styles._tag}>
                                WHY US
                            </div>

                            <div className={styles.why_content}>
                                <div className={styles.title}>
                                    Projects that matter deserve the best hands
                                </div>

                                <div className={styles.desc}>
                                    Assemble expert, diverse, agile, and scalable engineering teams on-demand to build and ship products quickly and efficiently.
                                </div>
                            </div>
                            
                            <div className={styles.why_items}>
                                <div className={styles.why_box}>
                                    <div className={styles._item}>
                                        <div className={styles.icon}>
                                            <img src="/world-class.svg" alt=""/>
                                        </div>

                                        <div className={ styles._iContent}>
                                            <div className={styles.title}>
                                                World class team
                                            </div>
                                            <div className={styles.desc}>
                                                Engineers at Enyata are technology leaders and domain experts in their fields.
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles._item}>
                                        <div className={styles.icon}>
                                            <img src="/rocket.svg" alt=""/>
                                        </div>

                                        <div className={ styles._iContent}>
                                            <div className={styles.title}>
                                                Agile culture
                                            </div>
                                            <div className={styles.desc}>
                                                Design thinking and agile principles are at the core of how our teams operate.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.why_box}>
                                    <div className={styles._item}>
                                        <div className={styles.icon}>
                                            <img src="/scale.svg" alt=""/>
                                        </div>

                                        <div className={ styles._iContent}>
                                            <div className={styles.title}>
                                                Scalable teams
                                            </div>
                                            <div className={styles.desc}>
                                                Augment your teams with our on-demand, high-quality engineering teams to build at scale.
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className={styles._item}>
                                        <div className={styles.icon}>
                                            <img src="/verified.svg" alt=""/>
                                        </div>

                                        <div className={ styles._iContent}>
                                            <div className={styles.title}>
                                                Successful, diverse teams
                                            </div>
                                            <div className={styles.desc}>
                                                Our teams benefit from the compounding effect of deep expertise and varied experience.
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

export default WhyUs;
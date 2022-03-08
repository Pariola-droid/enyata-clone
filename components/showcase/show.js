import React, { Component } from "react"
// import { Link } from 'react-router-dom'

import kafene from "../../assets/images/featured-image-kafene.png"
import dots from "../../assets/images/orange-dots.svg"

import styles from "../styles/showcase/show.module.scss";

class Show extends Component{   

    render(){
        return(
            <div>
                

                                <div className={styles.img_proW}>
                                    <div className={styles.img_pro}>
                                        <img src="/orange-dots.svg" className={styles.dot_img} alt="" />
                                        <div className={styles.bigImg}>
                                            <img src="/featured-image-kafene.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className={styles.pro_item}>                                    
                                    <div className={styles.proContent}>
                                        <div className={styles.miniT}>
                                            KAFENE
                                        </div>
                                        <div className={styles.title}>
                                            Empowering flexible ownership
                                        </div>
                                        <div className={styles.subtitle}>
                                            solution
                                        </div>
                                        <div className={styles.desc}>
                                            Kafene helps all consumers buy the things they want over time, affordably.
                                        </div>
                                        <div className={styles.subtitle}>
                                            impact
                                        </div>
                                        <div className={styles.desc}>
                                            Kafene now has a growing inventory of 150,000+ users leveraging its platform to apply for loans and purchase items seamlessly from their desired merchants across the US.
                                        </div>
                                    </div>                                    
                                </div>
                            
            </div>
        );
    }
}

export default Show;
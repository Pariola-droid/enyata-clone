import React, {Component} from 'react'
import Head from 'next/head';
// import {Link} from 'react-router-dom'

import NavOther from '../components/general/NavOther'
import NavMobile from '../components/general/navMobile'
import Header from '../components/general/header'
import Show from '../components/showcase/show'
import Cta from '../components/home/cta'
import Footer from '../components/home/Footer'

import styles from '../styles/showcase/showcase.module.scss'

class Showcase extends Component{


    render(){
        return(
            <div className={styles.showcase_page}>
                <Head>
                    <title>Enyata - Clone</title>
                    <meta name="Enyata" content="Enyata" content="A replica of enyata.com website UI - by pariola.dev" />
                    <link rel="icon" href="/klas.svg" />
                </Head>
                
                <NavOther />
                <NavMobile />

                <main>
                    <Header />

                    <section className={styles.projects}>
                        <div className={styles.wrapper}>                            
                            <div className={styles.pro_items}>
                                <Show />
                            </div>    
                            <div className={styles.pro_items}>
                                <Show />
                            </div>    
                            <div className={styles.pro_items}>
                                <Show />
                            </div>                            
                        </div>
                    </section>

                    <Cta />

                </main>                

                <Footer />

            </div>
        )
    }
}

export default Showcase;
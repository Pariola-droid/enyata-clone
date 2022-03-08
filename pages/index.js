import React, {Component} from 'react'
import Head from 'next/head';
// import {Link} from 'react-router-dom'

import Navbar from '../components/home/Navbar'
import NavMobile from '../components/home/navMobile'
import Header from '../components/home/header'
import WeDo from '../components/home/WeDo'
import Show from '../components/showcase/show'
import WhyUs from '../components/home/WhyUs'
import Clients from '../components/home/clients'
import Cta from '../components/home/cta'
import Footer from '../components/home/Footer'


import styles from '../styles/home/index.module.scss'

class Home extends Component{

    

    render(){
        return(
            <div>
                <Head>
                    <title>Enyata - Clone</title>
                    <meta name="Enyata" content="Enyata" content="A replica of enyata.com website UI - by pariola.dev." />
                    <link rel="icon" href="/favicon.ico" />

                    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
                </Head>
                
                <Navbar />
                <NavMobile />
                
                <main>
                    
                    <Header />
                    <WeDo />           

                    <section className={styles.projects}>
                        <div className={styles.wrapper}>
                            <div className={styles.pro_tag}>
                                FEATURED PROJECTS
                            </div>

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

                    <WhyUs />                   
                    <Clients />
                    <Cta />              

                </main>

                <Footer />

            </div>
        )
    }
}

export default Home;
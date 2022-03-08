import React, {Component} from 'react'
import Head from 'next/head';
// import {Link} from 'react-router-dom'

import NavOther from '../components/general/NavOther'
import NavMobile from '../components/general/navMobile'
import Header from '../components/general/header'
import Footer from '../components/home/Footer'

// import styles from '../../styles/about/about.module.scss'

class About extends Component{


    render(){
        return(
            <div>
                <Head>
                    <title>Enyata - Clone</title>
                    <meta name="Enyata" content="Enyata" content="A replica of enyata.com website UI - by pariola.dev" />
                    <link rel="icon" href="/klas.svg" />
                </Head>

                <NavOther />
                <NavMobile />
                <main>
                    <Header />

                </main>                

                <Footer />

            </div>
        )
    }
}

export default About;
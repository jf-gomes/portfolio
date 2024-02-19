import './Home.css'
import FirstSection from '../FirstSection/FirstSection'
import Header from '../Header/Header'
import PersonalProjects from '../PersonalProjects/PersonalProjects'
import WhoAmI from '../WhoAmI/WhoAmI'
import Contact from '../Contact/Contact'
import { useState } from 'react'
import Footer from '../Footer/Footer'

export default function Home(){

    return (
        <>
            <Header />
            <FirstSection />
            <PersonalProjects />
            <WhoAmI />
            <Contact />
            <Footer />
        </>
    )
}
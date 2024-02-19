import './Home.css'
import FirstSection from '../FirstSection/FirstSection'
import Header from '../Header/Header'
import PersonalProjects from '../PersonalProjects/PersonalProjects'
import WhoAmI from '../WhoAmI/WhoAmI'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import { useState } from 'react'

export default function Home(){

    const [darkMode, setDarkMode] = useState(false)

    return (
        <>
            <Header setDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
            <FirstSection darkMode={darkMode} />
            <PersonalProjects darkMode={darkMode} />
            <WhoAmI darkMode={darkMode} />
            <Contact darkMode={darkMode} />
            <Footer darkMode={darkMode} />
        </>
    )
}
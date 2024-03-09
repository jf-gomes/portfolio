import meNoBg from '../../img/meNoBg.png'
import js from '../../img/js.png'
import react from '../../img/react.png'
import nodejs from '../../img/nodejs.png'
import mongodb from '../../img/mongodb.png'
import ts from '../../img/ts.png'
import './FirstSection.css'
import { useState, useEffect } from 'react'

type FirstSectionProps = {
    darkMode: boolean
}

export default function FirstSection({ darkMode }: FirstSectionProps){

    const [size, setSize] = useState<number>(window.innerWidth)

    useEffect(() => {
        function handleResize(){
            setSize(window.innerWidth)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <section style={darkMode ? {backgroundColor: '#0D1B2A', color: 'white'} : {backgroundColor: '#E0E1DD', color: '#0D1B2A'}} id='sect1' className=''>
            {size > 790 ? 
            <div style={darkMode ? {backgroundColor: '#1B263B'} : {backgroundColor: 'white'}} className='sect1Container d-flex align-items-center justify-content-center gap-4'>
            <img className='meImg' src={meNoBg} alt="João Gomes" />
            <div>
                <h1>João Gomes</h1>
                <h2>Desenvolvedor web</h2>
                <div className='d-flex gap-4'>
                    <img className='sect1Icon' src={js} alt="JavaScript" />
                    <img className='sect1Icon' src={ts} alt="TypeScript" />
                    <img className='sect1Icon' src={react} alt="JavaScript" />
                    <img className='sect1Icon' src={nodejs} alt="JavaScript" />
                    <img className='sect1Icon' src={mongodb} alt="JavaScript" />
                </div>
            </div>
            </div>
            :
            <div style={darkMode ? {backgroundColor: '#1B263B'} : {backgroundColor: 'white'}} className='sect1Container d-flex flex-wrap align-items-center justify-content-center gap-4 pt-4'>
            <div className='sect1RightDiv'>
                <h1>João Gomes</h1>
                <h2>Software Engineer</h2>
                <p className='fs-5'>Desenvolvedor web e mobile fullstack.</p>
                <div className='d-flex gap-4'>
                    <img className='sect1Icon' src={js} alt="JavaScript" />
                    <img className='sect1Icon' src={ts} alt="TypeScript" />
                    <img className='sect1Icon' src={react} alt="JavaScript" />
                    <img className='sect1Icon' src={nodejs} alt="JavaScript" />
                    <img className='sect1Icon' src={mongodb} alt="JavaScript" />
                </div>
            </div>
            <img className='meImg' src={meNoBg} alt="João Gomes" />
            </div>}
        </section>
    )
    
}
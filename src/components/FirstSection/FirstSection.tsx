import me from '../../img/me.jpg'
import js from '../../img/js.png'
import react from '../../img/react.png'
import nodejs from '../../img/nodejs.png'
import mongodb from '../../img/mongodb.png'
import ts from '../../img/ts.png'
import './FirstSection.css'

type FirstSectionProps = {
    darkMode: boolean
}

export default function FirstSection({ darkMode }: FirstSectionProps){
    return (
        <section style={darkMode ? {backgroundColor: '#0D1B2A', color: 'white'} : {backgroundColor: '#E0E1DD', color: '#0D1B2A'}} id='sect1' className='d-flex flex-wrap justify-content-center align-items-center p-4 gap-4'>
            <img className='meImg' src={me} alt="João Gomes" />
            <div className='d-flex flex-column align-items-center gap-4'>
                <div className='d-flex flex-column align-items-center'>
                    <h1>João Gomes</h1>
                    <h2>Software Engineer</h2>
                </div>
                <div className='d-flex gap-4'>
                    <img className='sect1Icon' src={js} alt="JavaScript" />
                    <img className='sect1Icon' src={ts} alt="TypeScript" />
                    <img className='sect1Icon' src={react} alt="JavaScript" />
                    <img className='sect1Icon' src={nodejs} alt="JavaScript" />
                    <img className='sect1Icon' src={mongodb} alt="JavaScript" />
                </div>
                <div className='d-flex gap-4'>
                    <button className='defaultBtn'>Meus projetos</button>
                    <button className='defaultBtn'>Sobre mim</button>
                </div>
            </div>
        </section>
    )
    
}
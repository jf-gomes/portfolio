import './WhoAmI.css'
import me from '../../img/me.jpg'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'

type WhoAmIProps = {
    darkMode: boolean
}

export default function WhoAmI({ darkMode }: WhoAmIProps){

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to('.whoAmILeftDiv', {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: '#whoAmISect',
                start: 'top 600px'
            }
        })
        gsap.to('.whoAmIImg', {
            opacity: 1,
            scrollTrigger: {
                trigger: '#whoAmISect',
                start: 'top 600px'
            }
        })
        gsap.to('.toolsAndSkillsDiv', {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '#whoAmISect',
                start: 'top top'
            }
        })
    }, [])

    return (
        <section style={darkMode ? {backgroundColor: '#0D1B2A', color: 'white'} : {backgroundColor: '#E0E1DD', color: '#0D1B2A'}} id='whoAmISect' className='d-flex flex-column align-items-center p-4 gap-4'>
            <h2 className='p-4'>Quem sou eu</h2>
            <div className='d-flex flex-wrap justify-content-center align-items-center gap-4'>
                <div className='whoAmILeftDiv d-flex flex-column fs-5'>
                    <p>Olá! Meu nome é João Víctor Feitosa Gomes e sou <span>engenheiro de software</span>. Meu objetivo é fornecer às empresas para as quais trabalho, a oportunidade de executar seus processos de forma mais eficiente, por meio da utilização de softwares adequados desenvolvidos de forma profissional.</p>
                    <p>Atualmente tenho focado meu trabalho no desenvolvimento <span>web e mobile</span>, atuando tanto no front, como no back. Possuo experiência com manutenção de sistemas e apoio técnico em organizações do setor público, além de prestar serviços de desenvolvimento web como freelancer. Sou estudante de <span>Análise e Desenvolvimento de Sistemas</span>, graduado em Administração e Pós-Graduado em <span>Redes de Computadores</span>.</p>
                </div>
                <img className='whoAmIImg' src={me} alt="João Gomes" />
            </div>
            <div style={{margin: '6rem'}} className='toolsAndSkillsDiv d-flex flex-wrap justify-content-center gap-4'>
                <div className='whoAmIBottomDiv d-flex flex-column align-items-center'>
                    <h3>Tecnologias utilizadas</h3>
                    <p className='fs-5'>JavaScript / TypeScript / React / React Native / NodeJS / MongoDB / API REST</p>
                </div>
                <div className='whoAmIBottomDiv d-flex flex-column align-items-center'>
                    <h3>Habilidades</h3>
                    <p className='fs-5'>Landing pages / Sistemas web / Aplicativos / Fullstack</p>
                </div>
            </div>
        </section>
    )
}
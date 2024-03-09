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
                start: 'bottom bottom'
            }
        })
    }, [])

    return (
        <section style={darkMode ? {backgroundColor: '#0D1B2A', color: 'white'} : {backgroundColor: '#E0E1DD', color: '#0D1B2A'}} id='whoAmISect' className='d-flex flex-column align-items-center p-4 gap-4'>
            <h2 className='p-4'>Quem sou eu</h2>
            <div className='d-flex flex-wrap justify-content-center align-items-center gap-4'>
                <div className='whoAmILeftDiv d-flex flex-column fs-5'>
                    <p>Olá! Meu nome é João Gomes e sou <span>desenvolvedor web</span>. Como programador, meu objetivo é desenvolver sistemas otimizados, dinâmicos, expansivos e intuitivos.</p>
                    <p>Possuo experiência com manutenção de sites, banco de dados e suporte técnico em organizações do setor público, além de prestar serviços de desenvolvimento web como freelancer.</p>
                    <p>Sou estudante de <span>Análise e Desenvolvimento de Sistemas</span>, graduado em Administração e Pós-Graduado em <span>Redes de Computadores</span>.</p>
                </div>
                <img className='whoAmIImg' src={me} alt="João Gomes" />
            </div>
            <div style={{margin: '6rem'}} className='toolsAndSkillsDiv d-flex flex-wrap justify-content-center gap-4'>
                <div className='whoAmIBottomDiv d-flex flex-column align-items-center'>
                    <h3>Tecnologias utilizadas</h3>
                    <p className='fs-5'>JavaScript / TypeScript / React / NodeJS / Express / Redux / MongoDB / API REST</p>
                </div>
                <div className='whoAmIBottomDiv d-flex flex-column align-items-center'>
                    <h3>Habilidades</h3>
                    <p className='fs-5'>Landing pages / Sistemas web / Componentização / Requisições HTTP / Banco de dados / CSS frameworks</p>
                </div>
            </div>
        </section>
    )
}
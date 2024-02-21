import './PersonalProjects.css'
import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

type PersonalProjectsProps = {
    darkMode: boolean
}

export default function PersonalProjects({ darkMode }: PersonalProjectsProps){

    const personalProjectsData = [
        {
            id: '0',
            title: 'Zesty',
            description: 'Sistema para gerenciamento de projetos e trabalho colaborativo.',
            img: 'https://i.imgur.com/k9FDJNO.png',
            deploy: 'https://jf-gomes.github.io/zesty-frontend'
        },
        {
            id: '1',
            title: 'NorteCon',
            description: 'Site para uma empresa de consórcios de Porto Velho, Rondônia.',
            img: 'https://i.imgur.com/GkJnlEZ.png',
            deploy: 'https://jf-gomes.github.io/nortecon'
        },
        {
            id: '2',
            title: 'GatherSphere',
            description: 'Site para organização e gerenciamento de eventos.',
            img: 'https://i.imgur.com/e8YViDF.png',
            deploy: 'https://jf-gomes.github.io/gather-sphere-frontend'
        }
    ]

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to('.personalProjectContainer', {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: '#personalProjectsSect',
                start: 'top 500px'
            }
        })
    }, [])

    return (
        <section style={darkMode ? {backgroundColor: '#0D1B2A', color: 'white'} : {backgroundColor: '#E0E1DD', color: '#0D1B2A'}} id='personalProjectsSect' className='d-flex flex-column justify-content-center align-items-center p-4 gap-4'>
            <h2 className='p-4'>Projetos pessoais</h2>
            {personalProjectsData.map((project) => (
                <div key={project.id} className='personalProjectContainer d-flex flex-wrap justify-content-center gap-4'>
                    <img className='personalProjectsImg' src={project.img} alt={project.title} />
                    <div className='personalProjectRightDiv d-flex flex-column'>
                        <h3>{project.title}</h3>
                        <p className='fs-5'>{project.description}</p>
                        <a href={project.deploy} target='_blank'><button className='defaultBtn'>Acessar</button></a>
                    </div>
                </div>
            ))}
        </section>
    )
}
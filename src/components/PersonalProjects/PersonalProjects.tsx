import './PersonalProjects.css'
import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

type PersonalProjectsProps = {
    darkMode: boolean
}

interface PersonalProjectsType{
    id: string,
    title: string,
    description: string,
    img: string,
    deploy?: string,
    repo?: string,
    functions: string[],
    technologies: string[]
}

export default function PersonalProjects({ darkMode }: PersonalProjectsProps){

    const personalProjectsData: PersonalProjectsType[] = [
        {
            id: '0',
            title: 'Proflyte',
            description: 'Blog e portal jornalístico com notícias sobre variadas áreas da ciência.',
            img: 'https://i.imgur.com/kbsda7s.jpg',
            repo: 'https://github.com/jf-gomes/proflyte-frontend',
            functions: ['Ver notícias', 'Cadastrar conta', 'Login com autenticação JWT', 'Ver perfis de usuários'],
            technologies: ['TYPESCRIPT', 'REACT', 'NODE', 'API', 'EXPRESS', 'MONGODB', 'REDUX', 'TAILWIND']
        },
        {
            id: '1',
            title: 'Zesty',
            description: 'Sistema para gerenciamento de projetos e trabalho colaborativo.',
            img: 'https://i.imgur.com/k9FDJNO.png',
            deploy: 'https://jf-gomes.github.io/zesty-frontend',
            functions: ['Cadastrar conta', 'Login com autenticação JWT', 'Criar projetos', 'Convidar colegas', 'Criar e atribuir tarefas', 'Enviar e receber mensagens'],
            technologies: ['JAVASCRIPT', 'REACT', 'NODE', 'API', 'EXPRESS', 'MONGODB']
        },
        {
            id: '2',
            title: 'NorteCon',
            description: 'Site para uma empresa de consórcios de Porto Velho, Rondônia.',
            img: 'https://i.imgur.com/GkJnlEZ.png',
            deploy: 'https://jf-gomes.github.io/nortecon',
            functions: ['Simular crédito'],
            technologies: ['JAVASCRIPT', 'REACT', 'BOOTSTRAP']
        },
        {
            id: '3',
            title: 'GatherSphere',
            description: 'Site para organização e gerenciamento de eventos.',
            img: 'https://i.imgur.com/ED3YYbK.jpg',
            deploy: 'https://jf-gomes.github.io/gather-sphere-frontend',
            functions: ['Cadastrar conta', 'Login com autenticação JWT', 'Ver eventos', 'Realizar inscrição em um evento', 'Cancelar a inscrição em um evento', 'Editar cadastro'],
            technologies: ['JAVASCRIPT', 'REACT', 'NODE', 'API', 'EXPRESS', 'MONGODB']
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
                        <h4 className='fs-6'>Funcionalidades</h4>
                        <ul>
                            {project.functions.map((fn) => (
                                <li>{fn}</li>
                            ))}
                        </ul>
                        <h4 className='fs-6'>Tecnologias utilizadas</h4>
                        <ul>
                            {project.technologies.map((t) => (
                                <li>{t}</li>
                            ))}
                        </ul>
                        <a href={project.deploy} target='_blank'><button className='defaultBtn'>{project.deploy ? 'Acessar projeto' : 'Acessar repositório'}</button></a>
                    </div>
                </div>
            ))}
        </section>
    )
}
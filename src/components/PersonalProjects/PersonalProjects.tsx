import './PersonalProjects.css'

export default function PersonalProjects(){

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

    return (
        <section id='personalProjectsSect' className='d-flex flex-column justify-content-center align-items-center gap-4 m-4'>
            <h2 className='text-white p-4'>Projetos pessoais</h2>
            {personalProjectsData.map((project) => (
                <div key={project.id} className='d-flex flex-wrap justify-content-center gap-4 text-white'>
                    <img className='personalProjectsImg' src={project.img} alt={project.title} />
                    <div className='personalProjectRightDiv d-flex flex-column'>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.deploy} target='_blank'><button className='defaultBtn'>Acessar</button></a>
                    </div>
                </div>
            ))}
        </section>
    )
}
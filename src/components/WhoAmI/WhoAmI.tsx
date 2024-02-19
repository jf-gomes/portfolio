import './WhoAmI.css'

export default function WhoAmI(){
    return (
        <section id='whoAmISect' className='d-flex flex-column align-items-center m-4 text-white gap-4'>
            <h2 className='p-4'>Quem sou eu</h2>
            <div className='d-flex flex-wrap justify-content-center gap-4'>
                <div className='whoAmILeftDiv d-flex flex-column'>
                    <p>Olá! Meu nome é João Víctor Feitosa Gomes e sou engenheiro de software. Meu objetivo é fornecer às empresas para as quais trabalho, a oportunidade de executar seus processos de forma mais eficiente, por meio da utilização de softwares adequados desenvolvidos de forma profissional.</p>
                    <p>Atualmente tenho focado meu trabalho no desenvolvimento web e mobile, atuando tanto no front, como no back. Possuo experiência com manutenção de sistemas e apoio técnico em organizações do setor público, além de prestar serviços de desenvolvimento web como freelancer. Sou estudante de Análise e Desenvolvimento de Sistemas, graduado em Administração e Pós-Graduado em Redes de Computadores.</p>
                </div>
                <img className='whoAmIImg' src="https://i.imgur.com/9kcWWmf.jpg" alt="João Gomes" />
            </div>
            <div style={{width: '80%'}} className='d-flex flex-column'>
                <h3>Tecnologias utilizadas</h3>
                <p>JavaScript, TypeScript, React, React Native, NodeJS, MongoDB, API REST</p>
                <h3>Habilidades</h3>
                <p>Landing pages, sistemas web e aplicativos fullstack</p>
            </div>
        </section>
    )
}
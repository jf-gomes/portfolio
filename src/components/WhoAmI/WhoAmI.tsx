import './WhoAmI.css'

type WhoAmIProps = {
    darkMode: boolean
}

export default function WhoAmI({ darkMode }: WhoAmIProps){
    return (
        <section style={darkMode ? {backgroundColor: '#0D1B2A', color: 'white'} : {backgroundColor: '#E0E1DD', color: '#0D1B2A'}} id='whoAmISect' className='d-flex flex-column align-items-center p-4 gap-4'>
            <h2 className='p-4'>Quem sou eu</h2>
            <div className='d-flex flex-wrap justify-content-center gap-4'>
                <div className='whoAmILeftDiv d-flex flex-column fs-5'>
                    <p>Olá! Meu nome é João Víctor Feitosa Gomes e sou engenheiro de software. Meu objetivo é fornecer às empresas para as quais trabalho, a oportunidade de executar seus processos de forma mais eficiente, por meio da utilização de softwares adequados desenvolvidos de forma profissional.</p>
                    <p>Atualmente tenho focado meu trabalho no desenvolvimento web e mobile, atuando tanto no front, como no back. Possuo experiência com manutenção de sistemas e apoio técnico em organizações do setor público, além de prestar serviços de desenvolvimento web como freelancer. Sou estudante de Análise e Desenvolvimento de Sistemas, graduado em Administração e Pós-Graduado em Redes de Computadores.</p>
                </div>
                <img className='whoAmIImg' src="https://i.imgur.com/9kcWWmf.jpg" alt="João Gomes" />
            </div>
            <div style={{margin: '6rem'}} className='d-flex flex-wrap gap-4'>
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
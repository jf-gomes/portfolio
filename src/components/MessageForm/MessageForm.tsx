import './MessageForm.css'

type MessageFormProps = {
    darkMode: boolean
}

export default function MessageForm({ darkMode }: MessageFormProps){

    async function handleSubmit(){

    }

    return(
        <form style={darkMode ? {backgroundColor: '#1B263B', color: 'white'} : {backgroundColor: 'white', color: '#0D1B2A'}} action="" className="d-flex flex-column align-items-center gap-4 p-4">
            <input className='p-1' type="text" name="" id="" placeholder="Seu nome" required/>
            <input className='p-1' type="email" name="" id="" placeholder="Seu e-mail" required />
            <input className='p-1' type="text" name="" id="" placeholder="Sua mensagem" required />
            <button onClick={handleSubmit} className='defaultBtn'>Enviar</button>
        </form>
    )
}
import './MessageForm.css'
import { EventHandler, FormEvent, useState } from 'react'
import { api } from '../../services/api'
import Loader from '../Loader/Loader'

type MessageFormProps = {
    darkMode: boolean
}

export default function MessageForm({ darkMode }: MessageFormProps){

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const [loader, setLoader] = useState<boolean>(false)
    const [toggleConfirmation, setToggleConfirmation] = useState<boolean>(false)

    async function handleSubmit(e: FormEvent){
        e.preventDefault()
        setToggleConfirmation(false)
        if (!name || !email || !content){
            alert('Preencha todos os dados.')
        } else {
            setLoader(true)
            const response = await api.post('/msg', {
                name: name,
                email: email,
                content: content
            })
            console.log(response)
            setName('')
            setEmail('')
            setContent('')
            setLoader(false)
            setToggleConfirmation(true)
        }
    }

    return(
        <form style={darkMode ? {backgroundColor: '#1B263B', color: 'white'} : {backgroundColor: 'white', color: '#0D1B2A'}} action="" className="d-flex flex-column align-items-center gap-4 p-4">
            <input value={name} onChange={(v) => setName(v.target.value)} className='p-1 fs-5' type="text" name="name" id="nameInput" placeholder="Seu nome" required/>
            <input value={email} onChange={(v) => setEmail(v.target.value)} className='p-1 fs-5' type="email" name="email" id="emailInput" placeholder="Seu e-mail" required />
            <input value={content} onChange={(v) => setContent(v.target.value)} className='p-1 fs-5' type="text" name="content" id="contentInput" placeholder="Sua mensagem" required />
            {loader ? <Loader color={darkMode ? 'grey' : 'blue'} /> : null}
            {toggleConfirmation ? <p>Sua mensagem foi enviada!</p> : null}
            <button onClick={handleSubmit} className='defaultBtn'>Enviar</button>
        </form>
    )
}
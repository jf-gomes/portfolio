import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './Contact.css'

type ContactProps = {
    darkMode: boolean
}

export default function Contact({ darkMode }: ContactProps){
    return(
        <section style={darkMode ? {backgroundColor: '#0D1B2A', color: 'white'} : {backgroundColor: '#E0E1DD', color: '#0D1B2A'}} id="contactSect" className="d-flex flex-column align-items-center gap-4">
            <h3 className="p-4">Entre em contato</h3>
            <div className="contactIconsDiv d-flex gap-4">
                <a style={darkMode ? {color: 'white'} : { color: '#0D1B2A'}} href="https://github.com/jf-gomes" target="_blank">
                    <FaGithub className="contactIcon" size={48} />
                </a>
                <a style={darkMode ? {color: 'white'} : { color: '#0D1B2A'}} href="https://www.linkedin.com/in/joao-v-f-gomes/" target="_blank">
                    <FaLinkedin className="contactIcon" size={48} />
                </a>
            </div>
            <p>jf.gomes458@gmail.com</p>
        </section>
    )
}
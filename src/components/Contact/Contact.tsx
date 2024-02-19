import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './Contact.css'

export default function Contact(){
    return(
        <section id="contactSect" className="d-flex flex-column text-white align-items-center m-4 gap-4">
            <h3 className="p-4">Entre em contato</h3>
            <div className="d-flex gap-4">
                <FaGithub className="contactIcon" size={48} />
                <FaLinkedin className="contactIcon" size={48} />
            </div>
            <p>jf.gomes458@gmail.com</p>
        </section>
    )
}
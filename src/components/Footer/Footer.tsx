import './Footer.css'

type FooterProps = {
    darkMode: boolean
}

export default function Footer({ darkMode }: FooterProps){
    return (
        <footer style={darkMode ? {backgroundColor: 'black', color: 'white'} : {backgroundColor: '#E0E1DD', color: '#0D1B2A'}} className="d-flex justify-content-center align-items-center">
            <p>© 2024 João Gomes</p>
        </footer>
    )
}
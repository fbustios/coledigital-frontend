import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';
import '../styles/pantallaPrincipal.css';

export default function IniciarSesion() {
    const navigate = useNavigate();
    const { darkMode } = useContext(ThemeContext);

    const irALogin = () => {
        navigate('/login');
    };

    return (
        <div className={`home-container ${darkMode ? 'dark' : 'light'}`}>
            <img src="/LogoColeDigital.png" alt="Logo" className="home-logo" />
            <button className="home-button" onClick={irALogin}>
                Iniciar Sesión
            </button>
        </div>
    );
}

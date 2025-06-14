import { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';
import '../styles/BotonGlobal.css';

function BotonGlobal() {
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <button className="boton-global" onClick={toggleTheme}>
            {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
    );
}

export default BotonGlobal;
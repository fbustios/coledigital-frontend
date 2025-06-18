import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from '../components/ThemeContext';
import '../styles/dashboard.css';

export default function ClassInterface() {
    const { darkMode } = useContext(ThemeContext);
    const navigate = useNavigate();
    const materia = localStorage.getItem('clase_materia');

    return (
        <div className={`container ${darkMode ? 'dark' : 'light'}`}>
            <aside className='sidebar'>
                <button onClick={() => navigate('Material')}>📑</button>
                <button onClick={() => navigate('Notas')}>🏅</button>
            </aside>
            <main className='main'>
                <h1>{materia}</h1>
            </main>
        </div>
    );
}
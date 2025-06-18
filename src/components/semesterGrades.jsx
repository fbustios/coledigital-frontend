import '../styles/SemesterCards.css';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext'; // Asegurate que la ruta sea correcta

export default function SemesterGrades() {
    const navigate = useNavigate();
    const { darkMode } = useContext(ThemeContext);
    const user = JSON.parse(localStorage.getItem('user'));

    const handleClick = (e, semestre) => {
        e.preventDefault();
        localStorage.setItem('semestre', semestre);
        if (user.rol === 'Profesor') {
            navigate('Estudiantes');
        } else {
            navigate('NotasPersonales');
        }
    };

    return (
        <div className={`container ${darkMode ? 'dark' : 'light'}`}>
            <div className="card" onClick={(e) => handleClick(e, 1)}>
                <img src="/grades.jpg" alt="I Semestre" />
                <h2>I Semestre</h2>
            </div>

            <div className="card" onClick={(e) => handleClick(e, 2)}>
                <img src="/grades.jpg" alt="II Semestre" />
                <h2>II Semestre</h2>
            </div>
        </div>
    );
}
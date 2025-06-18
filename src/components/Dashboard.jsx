import { useState, useEffect, useContext } from "react";
import { ThemeContext } from '../components/ThemeContext';
import { useNavigate } from 'react-router-dom';
import '../styles/dashboard.css';

export default function Dashboard() {
    const { darkMode } = useContext(ThemeContext);
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    const id = user.id;
    const rol = user.rol;
    const navigate = useNavigate();
    const [clases, setClases] = useState([]);

    useEffect(() => {
        const getClasses = async () => {
            try {
                const res = await fetch('http://192.168.0.93:8080/Home/Dashboard', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': 'Bearer ' + token
                    },
                    body: JSON.stringify({ id, rol })
                });
                if (!res.ok) throw new Error('Error en el fetch');
                const data = await res.json();
                setClases(data.clases);
            } catch (err) {
                alert('Error al obtener clases');
            }
        };
        getClasses();
    }, [id, rol, token]);

    const isProfessor = rol === 'Profesor';

    const clasesAgrupadas = Object.values(clases.reduce((acc, clase) => {
        if (!acc[clase.clase_id]) {
            acc[clase.clase_id] = {
                id: clase.clase_id,
                nombre: clase.materia,
                seccion: clase.numero || clase.seccion || '',
                horarios: []
            };
        }
        acc[clase.clase_id].horarios.push({
            dia: clase.dia,
            inicio: clase.inicio,
            fin: clase.fin
        });
        return acc;
    }, {}));

    const handleSubmit = async (e, clase) => {
        e.preventDefault();
        localStorage.setItem('clase_id', clase.id);
        localStorage.setItem('clase_materia', clase.nombre);
        navigate('Clase');
    };

    return (
        <div className={`container ${darkMode ? 'dark' : 'light'}`}>
            <aside className='sidebar'><p></p></aside>
            <main className='main'>
                <h1>Mis Clases</h1>
                <div className='grid'>
                    {clasesAgrupadas.map((clase) => (
                        <div key={clase.id} className='card'>
                            <h2 className='card-title'>{clase.nombre}</h2>
                            {isProfessor && <p className='card-text'>Sección: {clase.seccion}</p>}
                            <p className='card-text'>Horarios:</p>
                            <ul>
                                {clase.horarios.map((h, index) => (
                                    <li key={index}>{h.dia} de {h.inicio} a {h.fin}</li>
                                ))}
                            </ul>
                            <form onSubmit={(e) => handleSubmit(e, clase)}>
                                <button className='button' type='submit'>Visitar</button>
                            </form>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

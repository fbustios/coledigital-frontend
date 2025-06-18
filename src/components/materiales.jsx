import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/materiales.css';

export default function Materiales() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    const clase_id = localStorage.getItem('clase_id');
    const semestre_id = localStorage.getItem('semestre');

    const [materiales, setMateriales] = useState([]);

    useEffect(() => {
        const obtenerMateriales = async () => {
            try {
                const res = await fetch('http://localhost:8080/Home/materialesClase', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': 'Bearer ' + token
                    },
                    body: JSON.stringify({ clase_id, semestre_id })
                });

                if (!res.ok) throw new Error('Error al obtener materiales');

                const data = await res.json();
                setMateriales(data.materiales);
            } catch (err) {
                alert('Error al cargar los materiales');
                console.error(err);
            }
        };

        obtenerMateriales();
    }, [clase_id, semestre_id, token]);

    const handleAgregar = () => {
        navigate('/Home/Dashboard/Clase/Material/agregarMaterial');
    };

    return (
        <div className="materiales-container">
            <h2>Materiales - Semestre {semestre_id}</h2>
            {materiales.length === 0 ? (
                <p>No hay materiales disponibles para esta clase.</p>
            ) : (
                <div className="materiales-list">
                    {materiales
                        .filter(mat => mat.nombre && mat.nombre.trim() !== '')
                        .map((mat, index) => (
                            <div key={index} className="material-card">
                                <a href={mat.link_one_drive} target="_blank" rel="noreferrer">
                                    <h3>{mat.nombre}</h3>
                                </a>
                            </div>
                        ))}
                </div>
            )}

            {user.rol === 'Profesor' && (
                <button onClick={handleAgregar} className="boton-agregar">
                    Agregar Material
                </button>
            )}
        </div>
    );
}
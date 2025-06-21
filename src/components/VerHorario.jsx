import { useEffect, useState } from 'react';
import '../styles/verHorario.css';

// Importá las imágenes
//import horario1 from '../assets/horarios/horario_general_1.png';
//import horario2 from '../assets/horarios/horario_general_2.png';
//import horario3 from '../assets/horarios/horario_general_3.png';
//import horario4 from '../assets/horarios/horario_general_4.png';
//import horario5 from '../assets/horarios/horario_general_5.png';
//import horario6 from '../assets/horarios/horario_general_6.png';

// Diccionario de imágenes por número de sección (final del "8-1", "10-4", etc.)
/*
const imagenesPorNumero = {
    1: horario1,
    2: horario2,
    3: horario3,
    4: horario4,
    5: horario5,
    6: horario6
};

export default function VerHorario() {
    const [imagen, setImagen] = useState(null);
    const [nombreSeccion, setNombreSeccion] = useState(null);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        const seccion = localStorage.getItem('seccion'); // ej: "9-1"

        setNombreSeccion(seccion);

        if (user?.rol === 'Profesor') {
            setImagen(horario1); // o imagen general
        } else if (seccion) {
            const partes = seccion.split('-');
            const numeroFinal = parseInt(partes[1]); // "9-1" → 1

            if (imagenesPorNumero[numeroFinal]) {
                setImagen(imagenesPorNumero[numeroFinal]);
            } else {
                setImagen(null);
            }
        } else {
            setImagen(null);
        }
    }, []);

    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>
                {nombreSeccion
                    ? `Horario de la sección ${nombreSeccion}`
                    : 'Horario de clases'}
            </h1>

            {imagen ? (
                <img
                    src={imagen}
                    alt={`Horario de sección ${nombreSeccion}`}
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        marginTop: '2rem',
                        borderRadius: '12px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}
                />
            ) : (
                <p>No se encontró horario para tu sección. Consultá con un administrador.</p>
            )}
        </div>
    );
}
*/
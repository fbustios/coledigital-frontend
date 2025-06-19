import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../components/ThemeContext';

export default function AgregarMaterial() {
    const { darkMode } = useContext(ThemeContext);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const clase_id = localStorage.getItem('clase_id');
    const semestre_id = localStorage.getItem('semestre');

    const [link, setLink] = useState('');
    const [nombre, setNombre] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/Home/agregarMaterial`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer ' + token
                },
                body: JSON.stringify({
                    link_one_drive: link,
                    clase_id,
                    semestre_id,
                    nombre
                })
            });

            if (!res.ok) throw new Error('Error al agregar material');

            alert('Material agregado correctamente');
            navigate('/Home/Dashboard/Clase/Material');
        } catch (err) {
            alert('Error al agregar material');
            console.error(err);
        }
    };

    return (
        <div className={`admin-container ${darkMode ? 'dark' : 'light'}`} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
        }}>
            <div className="admin-card">
                <h2 className="admin-title">Agregar Material</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Nombre del material"
                        required
                        className="login-input"
                    />
                    <input
                        type="text"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        placeholder="Enlace de OneDrive"
                        required
                        className="login-input"
                    />
                    <button type="submit" className="boton-guardar-material">
                        Guardar
                    </button>
                </form>
            </div>
        </div>
    );
}
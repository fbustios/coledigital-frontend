import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EditarProfesor() {
    const [cedula, setCedula] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/adminPage/editarProfesor`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer ' + token
                },
                body: JSON.stringify({
                    cedula: parseInt(cedula),
                    correo: correo || undefined,
                    telefono: telefono || undefined
                })
            });

            const result = await res.json();

            if (!res.ok) throw new Error(result.message || 'Error al actualizar');

            alert('Profesor actualizado correctamente');
            navigate('/adminPage');
        } catch (err) {
            alert('Error: ' + err.message);
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Editar Profesor</h2>
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="number"
                    placeholder="Cédula del profesor"
                    value={cedula}
                    onChange={(e) => setCedula(e.target.value)}
                    className="form-input"
                    required
                />
                <input
                    type="email"
                    placeholder="Correo (opcional)"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    className="form-input"
                />
                <input
                    type="tel"
                    placeholder="Teléfono (opcional)"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    className="form-input"
                />
                <button type="submit" className="form-button">Actualizar</button>
            </form>
        </div>
    );
}

export default EditarProfesor;
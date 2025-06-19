import {useNavigate} from 'react-router-dom';
import {useState} from 'react';

function ProfesorClase() {
    const [cedula, setCedula] = useState('');
    const [clase_id, setclase_id] = useState('');
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/adminPage/addProfessor`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json', 'authorization': 'Bearer ' + token},
                body: JSON.stringify({ cedula, clase_id }),
            });

            console.log('STATUS:', res.status);
            const texto = await res.text();
            console.log('BODY:', texto);

            if (!res.ok) throw new Error('Error en el fetch');

            navigate('/adminPage');
        } catch (err) {
            alert('Error en la asignación');
            console.error(err);
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Asignar Profesor a Clase</h2>
            <form onSubmit={handleSubmit} className="form">
                <input
                    className="form-input"
                    type="number"
                    value={cedula}
                    placeholder="Cédula del profesor"
                    onChange={(e) => setCedula(e.target.value)}
                    required
                />
                <input
                    className="form-input"
                    type="number"
                    value={clase_id}
                    placeholder="ID de la clase"
                    onChange={(e) => setclase_id(e.target.value)}
                    required
                />
                <button type="submit" className="form-button">Asignar</button>
            </form>
        </div>
    );
}

export default ProfesorClase;
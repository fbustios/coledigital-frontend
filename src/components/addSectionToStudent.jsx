import {useNavigate} from "react-router-dom";
import {useState} from "react";

function SectionToStudent(){
    const [cedula, setCedula] = useState('');
    const [seccion, setSeccion] = useState('');
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(seccion[1] === '-' && seccion[0] && seccion[2]){
            try {
                const res = await fetch('http://localhost:8080/adminPage/sectionStudent', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json', 'authorization': 'Bearer ' + token},
                    body: JSON.stringify({cedula, seccion}),
                });
                if(!res.ok){
                    throw new Error('error en el fetch')
                }
                navigate('/adminPage');
            }catch(err){
                alert('error en el fetch');
            }
        }

    }
    return (
        <div className="form-container">
            <h2 className="form-title">Asignar Sección</h2>
            <form onSubmit={handleSubmit} className="form">
                <input
                    className="form-input"
                    type='number'
                    value={cedula}
                    placeholder='cedula del estudiante'
                    onChange={(e) => setCedula(e.target.value)}
                    required
                />

                <input
                    className="form-input"
                    value={seccion}
                    placeholder='Seccion destino'
                    onChange={(e) => setSeccion(e.target.value)}
                    required
                    maxLength={3}
                />

                <button type='submit' className="form-button">Asignar</button>
            </form>
        </div>
    );
}

export default SectionToStudent;
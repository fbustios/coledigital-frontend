import {useNavigate} from "react-router-dom";
import {useState} from "react";
import '../styles/formStyle.css'


function AddProfessor(){
    const [nombre , setNombre] = useState('');
    const [cedula, setCedula] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const[fecha, setFecha] = useState('');
    const navigate = useNavigate();

    const handleProfessorSubmit = async (e) => {
        e.preventDefault();
        try{
            const token = localStorage.getItem('token');
            const res = await fetch('http://192.168.0.93:8080/adminPage/addProfessor', {
                method: 'POST',
                headers: {'Content-Type': 'application/json', 'authorization': 'Bearer ' + token},
                body: JSON.stringify({nombre, cedula, correo,telefono,fecha}),
            });
            if(!res.ok){
                console.log('Error en el fetch')
                throw new Error('Error en el fetch')
            }
            navigate('/adminPage');
        }catch(err){
            alert('Error en el fetch');
        }


    };
    return (
        <div className="form-container">
            <h2 className="form-title">Registrar Profesor</h2>
            <form onSubmit={handleProfessorSubmit} className="form">
                <input
                    className="form-input"
                    value={nombre}
                    placeholder='Nombre del profesor'
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
                <input
                    type='number'
                    className="form-input"
                    value={cedula}
                    placeholder='Cédula del profesor'
                    onChange={(e) => setCedula(e.target.value)}
                    required
                />
                <input
                    className="form-input"
                    value={correo}
                    placeholder='Correo del profesor'
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                />
                <input
                    type='number'
                    className="form-input"
                    value={telefono}
                    placeholder='Teléfono del profesor'
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                />
                <input
                    type='date'
                    className="form-input"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    required
                />
                <button type='submit' className="form-button">Agregar profesor</button>
            </form>
        </div>
    );

}

export default AddProfessor;
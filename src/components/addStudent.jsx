import {useNavigate} from "react-router-dom";
import {useState} from "react";
import '../styles/formStyle.css'


function AddStudent(){
    const [nombre , setNombre] = useState('');
    const [cedula, setCedula] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const[fecha, setFecha] = useState('');
    const navigate = useNavigate();

    const handleStudentSubmit = async (e) => {
        e.preventDefault();
        try{
            const token = localStorage.getItem('token');
            console.log(process.env.REACT_APP_BACKEND_URL);  // para probar
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/adminPage/addStudent/`, {
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
            <h2 className="form-title">Registrar Estudiante</h2>
            <form onSubmit={handleStudentSubmit} className="form">
                <input
                    className="form-input"
                    value={nombre}
                    placeholder='Nombre del estudiante'
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
                <input
                    type='number'
                    className="form-input"
                    value={cedula}
                    placeholder='Cédula del estudiante'
                    onChange={(e) => setCedula(e.target.value)}
                    required
                />
                <input
                    className="form-input"
                    value={correo}
                    placeholder='Correo del estudiante'
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                />
                <input
                    type='number'
                    className="form-input"
                    value={telefono}
                    placeholder='Teléfono del estudiante'
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
                <button type='submit' className="form-button">Agregar estudiante</button>
            </form>
        </div>
    );

}

export default AddStudent;
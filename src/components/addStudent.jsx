import {useNavigate} from "react-router-dom";
import {useState} from "react";
import '../App.css'


function AddStudent(){
    const [nombre , setNombre] = useState('');
    const [cedula, setCedula] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTefono] = useState('');
    const[fecha, setFecha] = useState('');
    const navigate = useNavigate();

    const handleStudentSumbit = async (e) => {
        e.preventDefault();
        try{
            const token = localStorage.getItem('token');
            const res = await fetch('http://localhost:8080/adminPage/addStudent', {
                method: 'POST',
                headers: {'Content-Type': 'application/json', 'authorization': 'Bearer ' + token},
                body: JSON.stringify({nombre, cedula, correo,telefono,fecha}),
            });
            if(!res.ok){
                console.log('Error en el fetch')
                throw new Error('Error en el fetch')
            }
        }catch(err){
            alert('Error en el fetch');
        }
        navigate('/adminPage');

    };
    return (
        <div>
            <form onSubmit={handleStudentSumbit}>
                <input
                    value={nombre}
                    placeholder='Nombre del estudiante'
                    onChange={(e)=>{setNombre(e.target.value)}}
                    required
                />
                <br/>
                <input
                    type='number'
                    value={cedula}
                    placeholder='Cedula del estudiante'
                    onChange={(e)=> {setCedula(e.target.value)}}
                    required
                />
                <br/>
                <input
                    value={correo}
                    placeholder='Correo del estudiante'
                    onChange={(e)=>{setCorreo(e.target.value)}}
                    required
                    />
                <br/>
                <input
                    type='number'
                    value={telefono}
                    placeholder='Telefono del estudiante'
                    onChange={(e)=>{setTefono(e.target.value)}}
                    required
                />
                <br/>
                <input
                    type='date'
                    value={fecha}
                    onChange={(e)=>{setFecha(e.target.value)}}
                    placeholder='Fecha de nacimiento'
                    required
                />
                <br/>
                <button type='submit'>Agregar estudiante</button>
            </form>
        </div>
    );
}

export default AddStudent;
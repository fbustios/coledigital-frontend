import {useState, useEffect} from "react";
import '../styles/dashboard.css'
import {useNavigate} from 'react-router-dom'



export default function Dashboard() {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    const id = user.id;
    const rol = user.rol;
    const navigate = useNavigate();
    const [clases, setClases] = useState([])

        useEffect(() =>{
            const getClasses = async () => {
                try {
                    const res = await fetch('http://localhost:8080/Home/Dashboard', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json', 'authorization': 'Bearer ' + token},
                        body: JSON.stringify({id, rol})
                    });
                    if(!res.ok){
                        throw new Error('Error en el fetch');
                    }
                    const data = await res.json();
                    setClases(data.clases);
                }catch(err){
                    alert('error al obtener todas las clases');
                }
            };
            getClasses();
        },[id, rol, token]);
    const isProfessor = rol === 'Profesor'
    const handleSubmit = async (e,clase) => {
        e.preventDefault();
        console.log(clase.nombre,clase.id)
        localStorage.setItem('clase_id',id)
        localStorage.setItem('clase_materia',clase.nombre)
        navigate('Clase')

    }
    return (
        <div className='container'>

            <aside className='sidebar'>
                <p></p>
            </aside>

            <main className='main'>
                <h1>Mis Clases</h1>
                <div className='grid'>
                    {clases.map((clase) => (
                        <div key={clase.id} className='card'>
                            <h2 className='card-title'>{clase.nombre}</h2>
                            <p className='card-text'>Hora de inicio: {clase.inicio}</p>
                            {isProfessor ? <p className='card-text'>Sección: {clase.numero}</p> : <p></p>}
                            <form onSubmit={(e) => handleSubmit(e,clase)}>
                                <button className='button' type='submit'>Visitar</button>
                            </form>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

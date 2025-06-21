import '../styles/grades.css';
import {useState} from "react";
import{useEffect} from "react";

function GradesStudent() {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
    const id = user.id;
    const isProfessor = user.rol === 'Profesor';
    const [evaluaciones,setEvaluaciones] = useState([])
    const claseId = localStorage.getItem('clase_id')
    const semestreId = localStorage.getItem('semestre');


    useEffect(() =>{
        async function getEvaluaciones(){
            try {
                const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/Home/Dashboard/Clase/Notas/NotasPersonales`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': 'Bearer ' + token
                    },
                    body: JSON.stringify({id, claseId, semestreId})
                })
                if (!res.ok) throw new Error('Error al obtener las evaluaciones')
                const data = await res.json();
                console.log(data.evaluaciones.length)
                setEvaluaciones(data.evaluaciones);
            }catch(e){
                alert('Aún no hay notas disponibles')
            }
        }
        getEvaluaciones();
    },[id,claseId,semestreId,token]);
    return (
        <div className="notas-wrapper">
            <table className="notas-tabla">
                <thead>
                <tr>
                    <th>Evaluación</th>
                    <th>Nota obtenida</th>
                    <th>Valor</th>
                </tr>
                </thead>
                <tbody>
                {evaluaciones.map((evalu, index) => (
                    <tr key={index}>
                        <td>{evalu.nombre}</td>
                        <td>{evalu.nota}</td>
                        <td>{evalu.porcentaje}</td>
                    </tr>
                ))}
                <tr className="fila-total">
                    <td>Total</td>
                    <td>- %</td>
                    <td>100%</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default GradesStudent;

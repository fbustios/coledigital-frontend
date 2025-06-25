import '../styles/grades.css';
import {useState, useEffect} from "react";


function GradesStudent() {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id')
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
                setEvaluaciones(data.evaluaciones);
            }catch(e){
                alert('Aún no hay notas disponibles')
            }
        }
        getEvaluaciones();
    },[id,claseId,semestreId,token]);

    const handleEdit = async (e, notaId) => {
        let notaNueva = e.target.value;

        if (notaNueva === '' || notaNueva > 100) {

            setEvaluaciones(prev =>
                prev.map(ev => ev.id === notaId ? { ...ev, nota: '' } : ev)
            );
            return;
        }
            setEvaluaciones(prev =>
                prev.map(ev => ev.id === notaId ? {...ev, nota: notaNueva} : ev)
            );
            try {
                const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/Home/Dashboard/Clase/Notas/NotasPersonales/Update`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': 'Bearer ' + token
                    },
                    body: JSON.stringify({notaNueva, notaId})
                })
                if (!res.ok) throw new Error();
            } catch (err) {
                alert('Error al guardar la nota');
            }

    }
    let total = 0;
    for(const e of evaluaciones){
        total+=e.nota * (e.porcentaje/100)
    }
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
                        <td>
                            {isProfessor ? (
                            <input
                                className='btn-pequeno'
                                type="number"
                                value={evalu.nota}
                                onChange={(e) => {handleEdit(e,evalu.id)}}
                            />) :
                                (<span>{evalu.nota}</span>)}
                        </td>

                        <td>{evalu.porcentaje}</td>
                    </tr>
                ))}
                <tr className="fila-total">
                    <td>Total</td>
                    <td>{Math.round(total)}</td>
                    <td>100%</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default GradesStudent;

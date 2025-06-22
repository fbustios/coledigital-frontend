import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";


function ListStudents(){
    const token = localStorage.getItem('token')
    const claseId = localStorage.getItem('clase_id')
    const [estudiantes, setEstudiantes] = useState([])
    const user = JSON.parse(localStorage.getItem('user'))
    const id = user.id
    useEffect(() => {
        async function getEstudiantes(){
            try{
                const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/Home/Dashboard/Clase/Notas/Estudiantes`,{
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                        'authorization': 'Bearer ' + token
                    },
                    body: {id,claseId}
                })
                if(!res.ok) throw new Error('Error')
                const data = await res.json()
                setEstudiantes(data.estudiantes)
            }catch(e){
                alert('error')
            }
        }
    }, [token,claseId,id]);
    return (<div>

    </div>)
}
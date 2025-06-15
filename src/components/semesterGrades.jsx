
import '../styles/SemesterCards.css';
import {useNavigate} from "react-router-dom";
//La referencia a info necesaria de clase está en localstorage.getItem('clase')
//Tener cuidado aqui, debe de haber un boton de generar reporte que solo se muestre si el rol del user es 'Profesor', además dependiendo del rol debe de redirigir
//a una página con todas las notas de los estudiantes, o solo la del estudiante que está usando el sistema.
export default function SemesterGrades() {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'));
    const handleClick = (e,semestre) => {
        e.preventDefault();
        if(user.rol === 'Profesor'){
            navigate('Estudiantes');
        } else {

            navigate('NotasPersonales');
        }
        localStorage.setItem('semestre',semestre);

    }
    return (
        <div className="container">
            <div className="card" onClick={(e) => handleClick(e,1)}>
                <img src="/grades.jpg" alt="I Semestre" />
                <h2>I Semestre</h2>
            </div>

            <div className="card" onClick={(e) => handleClick(e,2)}>
                <img src="/grades.jpg" alt="II Semestre" />
                <h2>II Semestre</h2>
            </div>
        </div>
    );
}

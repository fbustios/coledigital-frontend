import {useNavigate} from "react-router-dom";
import '../styles/adminPage.css'

function AdminPage(){
    const navigate = useNavigate();
    const handleFunction = (path) => (e) => {
        e.preventDefault();
        navigate(path);
    };

    return (
        <div className="admin-container">
            <div className="admin-card">
                <h1 className="admin-title">Panel de Administración</h1>
                <button
                    onClick={handleFunction('/adminPage/addStudent')}
                    className="admin-button student"
                >
                    Agregar Estudiante
                </button>
                <button
                    onClick={handleFunction('/adminPage/addProfessor')}
                    className="admin-button professor"
                >
                    Agregar Profesor
                </button>
                <button
                    onClick={handleFunction('/adminPage/reset')}
                    className="admin-button reset"
                >
                    Resetear año lectivo
                </button>
                <button
                    onClick={handleFunction('/adminPage/sectionStudent')}
                    className="admin-button sectionE"
                >
                    Asignar seccion a estudiante
                </button>
            </div>
        </div>
    );
}

export default AdminPage;
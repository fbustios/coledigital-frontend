import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/adminPage.css';
import { ThemeContext } from '../components/ThemeContext';

function AdminPage() {
    const navigate = useNavigate();
    const { darkMode } = useContext(ThemeContext);

    const handleFunction = (path) => (e) => {
        e.preventDefault();
        navigate(path);
    };

    return (
        <div className={`admin-container ${darkMode ? 'dark' : 'light'}`}>
            <div className="admin-card">
                <h1 className="admin-title">Panel de Administración</h1>

                <button onClick={handleFunction('/adminPage/addStudent')} className="admin-button student">
                    Agregar Estudiante
                </button>

                <button onClick={handleFunction('/adminPage/addProfessor')} className="admin-button professor">
                    Agregar Profesor
                </button>

                <button onClick={handleFunction('/adminPage/reset')} className="admin-button reset">
                    Resetear año lectivo
                </button>

                <button onClick={handleFunction('/adminPage/deleteFuncionario')} className="admin-button deleteF">
                    Eliminar Funcionario
                </button>

                <button onClick={handleFunction('/adminPage/sectionStudent')} className="admin-button sectionE">
                    Asignar seccion a estudiante
                </button>

                <button onClick={handleFunction('/adminPage/asignarProfesorClase')} className="admin-button professorC">
                    Asignar profesor a una clase
                </button>

                <button onClick={() => navigate('/adminPage/editarFuncionario')} className="admin-button editarFuncionario">
                    Editar Funcionario
                </button>
            </div>
        </div>
    );
}

export default AdminPage;
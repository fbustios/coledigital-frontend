import { useNavigate } from "react-router-dom";

function EditarFuncionario() {
    const navigate = useNavigate();

    return (
        <div className="form-container">
            <h2 className="form-title">Editar Funcionario</h2>
            <div className="form">
                <button
                    className="admin-button editProfesor"
                    onClick={() => navigate('/adminPage/editarProfesor')}
                >
                    Editar Profesor
                </button>
                <button
                    className="admin-button editEstudiante"
                    onClick={() => navigate('/adminPage/editarEstudiante')}
                >
                    Editar Estudiante
                </button>
            </div>
        </div>
    );
}

export default EditarFuncionario;
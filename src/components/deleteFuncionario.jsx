import {useNavigate} from "react-router-dom";
import {useState} from "react";
import '../styles/formStyle.css'


function DeleteFuncionario(){
    const [cedula, setCedula] = useState('');
    const navigate = useNavigate();

    const handleFunctionarySubmit = async (e) => {
        e.preventDefault();

        // ✅ Confirmación antes de eliminar
        const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este funcionario?');
        if (!confirmacion) {
            return; // El usuario canceló, no hace nada
        }

        try {
            const token = localStorage.getItem('token');
            const res = await fetch('http://localhost:8080/adminPage/deleteFuncionario', {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json', 'authorization': 'Bearer ' + token},
                body: JSON.stringify({cedula}),
            });
            if(!res.ok){
                console.log('Error en el fetch');
                throw new Error('Error en el fetch');
            }

            alert('Funcionario eliminado exitosamente');
            navigate('/adminPage');
        } catch(err) {
            alert('Error en el fetch');
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Eliminar Funcionario</h2>
            <form onSubmit={handleFunctionarySubmit} className="form">
                <input
                    type='number'
                    className="form-input"
                    value={cedula}
                    placeholder='Cédula del funcionario'
                    onChange={(e) => setCedula(e.target.value)}
                    required
                />
                <button type='submit' className="form-button">Eliminar Funcionario</button>
            </form>
        </div>
    );

}

export default DeleteFuncionario;
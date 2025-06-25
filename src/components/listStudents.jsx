import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/listStudents.css";

export default function ListStudents() {
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const claseId = localStorage.getItem("clase_id");
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const id = user.id;

    const [estudiantes, setEstudiantes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getEstudiantes() {
            setLoading(true);
            try {
                const res = await fetch(
                    `${process.env.REACT_APP_BACKEND_URL}/Home/Dashboard/Clase/Notas/Estudiantes`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            authorization: 'Bearer ' + token,
                        },
                        body: JSON.stringify({id, claseId}),
                    }
                );

                if (!res.ok) throw new Error("No se pudo obtener estudiantes");
                const data = await res.json();
                setEstudiantes(data.estudiantes || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        getEstudiantes();
    }, [token, claseId, id]);

    const handleView = (estudianteId) =>{
        localStorage.setItem('id',estudianteId);
        navigate('/Home/Dashboard/Clase/Notas/NotasPersonales');
    };

    if (loading) return <div className="list-container">Cargando estudiantes…</div>;
    if (error) return <div className="list-container error">{error}</div>;

    return (
        <div className="list-container">
            <h1 className="title">Estudiantes</h1>

            {estudiantes.length === 0 ? (
                <p>No hay estudiantes registrados.</p>
            ) : (
                <table className="students-table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {estudiantes.map((est, index) => (
                        <tr key={est.id ?? index}>
                            <td>{index + 1}</td>
                            <td>{est.nombre}</td>
                            <td>
                                <button onClick={() => handleView(est.id)} className="view-button">
                                    Ver
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

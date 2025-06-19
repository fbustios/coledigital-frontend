import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from '../components/ThemeContext';
import '../styles/dashboard.css';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { FaFilePdf } from 'react-icons/fa';


//autoTable(jsPDF);

export default function ClassInterface() {
    const { darkMode } = useContext(ThemeContext);
    const navigate = useNavigate();
    const materia = localStorage.getItem('clase_materia');
    // const claseId = localStorage.getItem('clase_id');

    const handleGenerarReporte = async () => {
        const token = localStorage.getItem('token');
        const claseId = localStorage.getItem('clase_id');

        try {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/Home/clase/${claseId}/reporte`, {

                headers: {
                    Authorization: 'Bearer ' + token
                }
            });

            if (!res.ok) {
                const errorText = await res.text(); // Leé el HTML o mensaje de error
                console.error('Respuesta del servidor:', errorText);
                throw new Error(`Error del servidor (${res.status})`);
            }

            const data = await res.json();
            const reporte = data.reporte;


            const doc = new jsPDF();
            doc.setFontSize(18);
            doc.text(`Reporte de Calificaciones - ${materia}`, 14, 22);


            // console.log("autoTable existe:", typeof doc.autoTable); // debería decir "function"
            doc.autoTable({
                head: [['Nombre', '1er Semestre', '2do Semestre', 'Promedio', 'Estado']],
                body: reporte.map(est => [
                    est.nombre_estudiante,
                    est.nota_primer_semestre,
                    est.nota_segundo_semestre,
                    est.promedio_final,
                    est.estado
                ]),
                startY: 30,
            });

            doc.save(`reporte_clase_${claseId}.pdf`);
            console.log("autoTable22 existe:", typeof doc.autoTable); // debería decir "function"
        } catch (err) {
            console.error('Error generando el PDF:', err);
            alert('No se pudo generar el reporte.');
        }
    };


    return (
        <div className={`container ${darkMode ? 'dark' : 'light'}`}>
            <aside className='sidebar'>
                <button onClick={() => navigate('Material')}>📑</button>
                <button onClick={() => navigate('Notas')}>🏅</button>
                <button className="sidebar-button" onClick={handleGenerarReporte}>
                    <FaFilePdf className="icono" />
                    <span style={{ fontSize: '0.75rem' }}>Reporte</span>
                </button>
            </aside>
            <main className='main'>
                <h1>{materia}</h1>
            </main>
        </div>
    );
}

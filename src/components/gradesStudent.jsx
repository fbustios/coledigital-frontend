import '../styles/grades.css';

function GradesStudent() {
    const evaluaciones = [
        { nombre: 'I Examen', nota: '-%', valor: '35%' },
        { nombre: 'II Examen', nota: '-%', valor: '35%' },
        { nombre: 'I Actividad en clase', nota: '-%', valor: '10%' },
        { nombre: 'II Actividad en clase', nota: '-%', valor: '10%' },
        { nombre: 'III Actividad en clase', nota: '-%', valor: '10%' },
    ];
    //const data = fetch()
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
                        <td>{evalu.valor}</td>
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

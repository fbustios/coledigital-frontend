import {useNavigate} from "react-router-dom";
import '../styles/dashboard.css'


export default function ClassInterface(){
    const navigate = useNavigate();
    const materia = localStorage.getItem('clase_materia');
    return(
        <div className='container'>

            <aside className='sidebar'>
                <button
                    onClick={() => navigate('Material')}
                >
                    📑
                </button>
                <button
                    onClick={() => navigate('Notas')}
                >
                    🏅
                </button>
            </aside>
            <main className='main'>
                <h1>{materia}</h1>
            </main>
        </div>
    )
}
import {useNavigate} from "react-router-dom";
import '../styles/dashboard.css'


export default function ClassInterface(){
    const navigate = useNavigate();
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
                <h1>{localStorage.getItem('clase').nombre}</h1>
            </main>
        </div>
    )
}
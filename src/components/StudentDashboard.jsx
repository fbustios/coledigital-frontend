import { useState } from "react";
import '../styles/dashboard.css'

const classes = [
    { id: 1, name: "Matemáticas", description: "Álgebra y geometría" },
    { id: 2, name: "Ciencias", description: "Biología y química" },
    { id: 3, name: "Historia", description: "Historia mundial" },
    { id: 4, name: "Lengua", description: "Gramática y lectura" },
];

export default function StudentDashboard() {
    const [active, setActive] = useState("home");


    return (
        <div className='container'>

            <aside className='sidebar'>
                <button
                    onClick={() => setActive("home")}
                >
                    🏠
                </button>
                <button
                    onClick={() => setActive("profile")}
                >
                    👤
                </button>
            </aside>

            {/* Main */}
            <main className='main'>
                <h1>Mis Clases</h1>
                <div className='grid'>
                    {classes.map((clase) => (
                        <div key={clase.id} className='card'>
                            <h2 className='card-title'>{clase.name}</h2>
                            <p className='card-text'>{clase.description}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

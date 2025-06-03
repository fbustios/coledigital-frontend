import {useNavigate} from "react-router-dom";
import {useState} from "react";


function AddStudent(){
    const [nombre , setNombre] = useState('');
    const handleStudentSumbit = async (e) => {
        //const res = await fetch
    };
    return (
        <div>
            <form>
                <input
                    value={nombre}
                    placeholder='Nombre del estudiante'
                    onChange={(e)=>{setNombre(e.target.value)}}
                    required
                />
            </form>
        </div>
    );
}

export default AddStudent;
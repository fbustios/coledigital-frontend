import {useNavigate} from "react-router-dom";
import '../styles/adminPage.css'


function Reset(){
    const navigate = useNavigate();
    const handleYes = async (e) => {
            e.preventDefault();
            const token = localStorage.getItem('token');
            try{
                const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/adminPage/reset`,{
                    method: 'DELETE',
                    headers: {'Content-Type': 'application/json', 'authorization': 'Bearer ' + token},
                });
                if(!res.ok){
                    throw new Error('error');
                }
            }catch(err){
                alert('Error en el fetch del reset')
            }


    }
    const handleNo = (e) => {
        e.preventDefault();
        navigate('/adminPage');
    }
    return(
        <div className='admin-container'>

            <div className='admin-card'>
                <h1 className="admin-title">Está seguro de continuar?</h1>
                <button
                    onClick={handleYes}
                    className='admin-button reset'
                >Sí, estoy seguro</button>
                <button
                    onClick={handleNo}
                    className='admin-button professor'
                >No, llévame de vuelta</button>
            </div>
        </div>
    );
}
export default Reset;
import {useNavigate} from "react-router-dom";

function AdminPage(){
    const navigate = useNavigate();
    const handleAddEstudent = (e) => {
        e.preventDefault();
        navigate('/adminPage/addEstudent');
    };
    return (
      <div>
          <div>
            <form onSubmit={handleAddEstudent}>
                <button type='submit'>Agregar estudiante</button>
            </form>
          </div>
      </div>
    )
}

export default AdminPage;
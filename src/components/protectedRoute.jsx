import {Navigate} from 'react-router-dom'
import App from "../App";

function ProtectedRoute({children,allowedRoles}) {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    if(!user || !token){
        return <Navigate to="/login"></Navigate>
    }

    if(allowedRoles && !allowedRoles.includes(user.rol)){
       return <Navigate to="/login"></Navigate>
    }

    return children;
}
export default ProtectedRoute;
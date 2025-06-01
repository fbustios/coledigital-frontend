import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await fetch('http://localhost:8080/login/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({username, password})
            })

            if(!res.ok){
                throw new Error(res.statusText);
            }

            const data = await res.json();
            localStorage.setItem('token',data.token);
            localStorage.setItem('user', JSON.stringify(data.user));

            navigate('/dashboard');
        }catch(err){
            console.log(err);
        }
    }
    return (
        <div>perro</div>
    )
}
export default Login;
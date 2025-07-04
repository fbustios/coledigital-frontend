import './App.css';
import { ThemeProvider } from './components/ThemeContext';
import BotonGlobal from './components/BotonGlobal';
import './styles/global.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IniciarSesion from "./components/iniciarSesion";
import Login from './components/login';
import protectedRoute from "./components/protectedRoute";
import AdminPage from "./components/adminPage";
import AddStudent from "./components/addStudent";
import AddProfessor from "./components/addProfessor";
import Reset from "./components/reset";
import SectionToStudent from './components/addSectionToStudent';
import Dashboard from "./components/Dashboard";
import DeleteFuncionario from './components/deleteFuncionario';
import ClassInterface from "./components/classInterface";
import SemesterMaterial from "./components/semesterMaterial";
import SemesterGrades from "./components/semesterGrades";
import ProfesorClase from "./components/addProfesorClase";
import EditarFuncionario from "./components/editarFuncionario";
import EditarProfesor from './components/editarProfesor';
import EditarEstudiante from './components/editarEstudiante';
import GradesStudent from "./components/gradesStudent";
import Materiales from "./components/materiales";
import AgregarMaterial from "./components/agregarMaterial";
import ListStudents from "./components/listStudents";
//import VerHorario from './components/VerHorario';

function App() {
    return (
        <ThemeProvider>
            <BotonGlobal />
                <Router>
                    <Routes>
                        <Route path='/' element={<IniciarSesion />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/adminPage' element={protectedRoute({ children: <AdminPage />, allowedRoles: ['Director'] })} />
                        <Route path='/adminPage/addStudent' element={protectedRoute({ children: <AddStudent />, allowedRoles: ['Director'] })} />
                        <Route path='/adminPage/addProfessor' element={protectedRoute({ children: <AddProfessor />, allowedRoles: ['Director'] })} />
                        <Route path='/adminPage/reset' element={protectedRoute({ children: <Reset />, allowedRoles: ['Director'] })} />
                        <Route path='/adminPage/sectionStudent' element={protectedRoute({ children: <SectionToStudent />, allowedRoles: ['Director'] })} />
                        <Route path='/Home/Dashboard' element={protectedRoute({ children: <Dashboard />, allowedRoles: ['Estudiante', 'Profesor'] })} />
                        <Route path='/adminPage/deleteFuncionario' element={protectedRoute({ children: <DeleteFuncionario />, allowedRoles: ['Director'] })} />
                        <Route path='/Home/Dashboard/Clase' element={protectedRoute({ children: <ClassInterface />, allowedRoles: ['Estudiante', 'Profesor'] })} />
                        <Route path='/Home/Dashboard/Clase/Material' element={protectedRoute({ children: <SemesterMaterial />, allowedRoles: ['Estudiante', 'Profesor'] })} />
                        <Route path='/Home/Dashboard/Clase/Notas' element={protectedRoute({ children: <SemesterGrades />, allowedRoles: ['Estudiante', 'Profesor'] })} />
                        <Route path='/adminPage/asignarProfesorClase' element={protectedRoute({ children: <ProfesorClase />, allowedRoles: ['Director'] })} />
                        <Route path="/adminPage/editarFuncionario" element={protectedRoute({ children: <EditarFuncionario />, allowedRoles: ['Director'] })} />
                        <Route path='/adminPage/editarProfesor' element={protectedRoute({ children: <EditarProfesor />, allowedRoles: ['Director'] })} />
                        <Route path='/adminPage/editarEstudiante' element={protectedRoute({ children: <EditarEstudiante />, allowedRoles: ['Director'] })} />
                        <Route path='/Home/Dashboard/Clase/Notas/NotasPersonales' element={protectedRoute({ children: <GradesStudent />, allowedRoles: ['Estudiante', 'Profesor'] })} />
                        <Route path='/Home/Dashboard/Clase/Material/links' element={protectedRoute({ children: <Materiales />, allowedRoles: ['Estudiante', 'Profesor'] })} />
                        <Route path='/Home/Dashboard/Clase/Material/agregarMaterial' element={protectedRoute({ children: <AgregarMaterial />, allowedRoles: ['Estudiante', 'Profesor'] })} />
                        {/*<Route path='/Home/Dashboard/VerHorario' element={protectedRoute({ children: <VerHorario />, allowedRoles: ['Estudiante'] })} />*/}
                        <Route path='/Home/Dashboard/Clase/Notas/Estudiantes' element={protectedRoute({ children: <ListStudents />, allowedRoles: ['Profesor'] })} />
                    </Routes>
                </Router>
        </ThemeProvider>
    );
}

export default App;
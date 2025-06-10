import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './components/login';
import protectedRoute from "./components/protectedRoute";
import AdminPage from "./components/adminPage";
import AddStudent from "./components/addStudent";
import AddProfessor from "./components/addProfessor";
import Reset from "./components/reset"
import SectionToStudent from './components/addSectionToStudent'
import StudentDashboard from "./components/StudentDashboard";
import DeleteFuncionario from './components/deleteFuncionario';

function App() {
  return (
      <Router>
        <Routes>
            <Route path= '/login' element={<Login/>}></Route>
            <Route path='/adminPage' element={protectedRoute({children : <AdminPage/>, allowedRoles: ['Director']})}></Route>
            <Route path='/adminPage/addStudent' element={protectedRoute({children: <AddStudent/>, allowedRoles: ['Director']})}></Route>
            <Route path='/adminPage/addProfessor' element={protectedRoute({children: <AddProfessor/>, allowedRoles: ['Director']})}></Route>
            <Route path='/adminPage/reset' element={protectedRoute({children: <Reset/>, allowedRoles: ['Director']})}></Route>
            <Route path='/adminPage/sectionStudent' element={protectedRoute({children: <SectionToStudent/>, allowedRoles: ['Director']})}></Route>
            <Route path='/Home/Dashboard' element={protectedRoute({children: <StudentDashboard/>, allowedRoles: ['Estudiante','Profesor']})}></Route>
            <Route path='/adminPage/deleteFuncionario' element={protectedRoute({children: <DeleteFuncionario/>, allowedRoles: ['Director']})}></Route>

        </Routes>
      </Router>
  );
}

export default App;

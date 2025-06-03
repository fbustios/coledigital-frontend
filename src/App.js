import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './components/login';
import protectedRoute from "./components/protectedRoute";
import AdminPage from "./components/adminPage";
import AddStudent from "./components/addStudent";

function App() {
  return (
      <Router>
        <Routes>
          <Route path= '/login' element={<Login/>}></Route>
          <Route path='/adminPage' element={protectedRoute({children : <AdminPage/>, allowedRoles: ['Director']})}></Route>
          <Route path='/adminPage/addEstudent' element={protectedRoute({children: <AddStudent/>, allowedRoles: ['Director']})}></Route>
        </Routes>
      </Router>
  );
}

export default App;

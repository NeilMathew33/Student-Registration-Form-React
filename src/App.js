import logo from './logo.svg';
import './App.css';
import StudentRegistration from './components/StudentRegistration';
import SearchStudent from './components/SearchStudent';
import DeleteStudent from './components/DeleteStudent';
import ViewAllStudents from './components/ViewAllStudents';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Signup';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Add" element={<StudentRegistration />} />
      <Route path="/search" element={<SearchStudent />} />
      <Route path="/delete" element={<DeleteStudent />} />
      <Route path="/ViewAll" element={<ViewAllStudents />} />
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

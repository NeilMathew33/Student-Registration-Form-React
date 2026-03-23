import logo from './logo.svg';
import './App.css';
import StudentRegistration from './components/StudentRegistration';
import SearchStudent from './components/SearchStudent';
import DeleteStudent from './components/DeleteStudent';
import ViewAllStudents from './components/ViewAllStudents';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StudentRegistration />} />
      <Route path="/search" element={<SearchStudent />} />
      <Route path="/delete" element={<DeleteStudent />} />
      <Route path="/ViewAll" element={<ViewAllStudents />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import Home from './Pages/Home';
import Frontend from './Pages/FrontendProjects/Frontend';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FullStackProjects from './Pages/FullStackProjects/FullStackProjects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/full-stack" element={<FullStackProjects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/style.css'
// Pages and crosspage components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/projectdetails/:id' element={<ProjectDetails/>} />
      </Routes>
      <Footer/>
      </Router>
  );
}

export default App;

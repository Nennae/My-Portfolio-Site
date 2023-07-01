import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages and crosspage components
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Work from './pages/Work';
import WorkDetails from './pages/WorkDetails';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Work/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/workdetails/:id' element={<WorkDetails/>} />
      </Routes>
      <Footer/>
      </Router>
  );
}

export default App;

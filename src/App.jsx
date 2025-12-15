import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Aapke components import karein
import Home from './pages/Home/Home';
import Header from './components/Header'; // Dhyan dein: Ye file banayi honi chahiye
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer/>
    </Router>
  )
}

export default App
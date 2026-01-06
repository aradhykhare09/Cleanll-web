import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Home from './pages/Home/Home';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Aquabreeze from './pages/Products/Aquabreeze/Aquabreeze';
import Aqualite from './pages/Products/Aqualite/Aqualite';
import Aquasky from './pages/Products/Aquasky/Aquasky';
import Pureone from './pages/Products/Pureone/Pureone';
import About from './pages/About/About';
import ScrollToTop from './components/ScrollToTop';
import Aquahide from './pages/Products/Aquahide/Aquahide';
import Bidet from './pages/Products/Bidet/Bidet';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Products */}
        <Route path="/aquabreeze" element={<Aquabreeze />} />
        <Route path="/aqualite" element={<Aqualite />} />
        <Route path="/aquasky" element={<Aquasky />} />
        <Route path="/pureone" element={<Pureone />} />
        <Route path="/aquahide" element={<Aquahide />} />
        <Route path="/bidet" element={<Bidet />} />
      </Routes>

      <Footer />

      {/* ================= FLOATING ACTION BUTTONS ================= */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

        {/* ===== CALL BUTTON ===== */}
        <a
          href="tel:+91 9115544233"
          className="group relative w-14 h-14 rounded-full
                     bg-blue-600 hover:bg-blue-700
                     flex items-center justify-center
                     text-white shadow-2xl
                     transition-all duration-300"
          aria-label="Call Us"
        >
          {/* Phone Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2
              19.79 19.79 0 0 1-8.63-3.07
              19.5 19.5 0 0 1-6-6
              19.79 19.79 0 0 1-3.07-8.67
              A2 2 0 0 1 4.11 2h3
              a2 2 0 0 1 2 1.72
              c.12.81.31 1.6.57 2.35
              a2 2 0 0 1-.45 2.11L8.09 9.91
              a16 16 0 0 0 6 6l1.73-1.73
              a2 2 0 0 1 2.11-.45
              c.75.26 1.54.45 2.35.57
              a2 2 0 0 1 1.72 2.01z"/>
          </svg>

          {/* Hover Text */}
          <span
            className="absolute right-16 top-1/2 -translate-y-1/2
                       bg-blue-600 text-white text-sm font-semibold
                       px-3 py-1 rounded-md
                       opacity-0 translate-x-2
                       group-hover:opacity-100 group-hover:translate-x-0
                       transition-all duration-300
                       whitespace-nowrap"
          >
            Call Us
          </span>
        </a>

        {/* ===== WHATSAPP BUTTON ===== */}
        <a
          href="https://wa.me/919811099841"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-14 h-14 rounded-full
                     bg-[#25D366] hover:bg-[#1ebe5d]
                     flex items-center justify-center
                     text-white shadow-2xl
                     transition-all duration-300"
          aria-label="Chat with us"
        >
          {/* WhatsApp Icon (SAME AS BEFORE) */}
          <svg 
            viewBox="0 0 24 24" 
            width="26" 
            height="26" 
            fill="currentColor" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>

          {/* Hover Text */}
          <span
            className="absolute right-16 top-1/2 -translate-y-1/2
                       bg-[#25D366] text-white text-sm font-semibold
                       px-3 py-1 rounded-md
                       opacity-0 translate-x-2
                       group-hover:opacity-100 group-hover:translate-x-0
                       transition-all duration-300
                       whitespace-nowrap"
          >
            Chat with us
          </span>
        </a>

      </div>
      {/* ========================================================== */}

    </Router>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import CaseStudy from './pages/CaseStudy';
import Pricing from './pages/Pricing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/casestudy" element={<CaseStudy />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Portfolio /><Footer /></>} />
        <Route path="/about" element={<><About /><Footer /></>} />
        <Route path="/contact" element={<><Contact /><Footer /></>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

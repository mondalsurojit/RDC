import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.component';
import Footer from './components/Footer.component';
import Home from './pages/Home.page';
import Members from './pages/Members.page';
import Projects from './pages/Projects.page';
import Events from './pages/Events.page';
import Gallery from './pages/Gallery.page';
import Contact from './pages/Contact.page';

const App = () => {
  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto bg-white">
      <Header />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;

import React from 'react';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Feedbacks } from './components';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Resume from './components/Resume';
const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <Routes>
        {/* When the path is `/resume`, only render MyDocument */}
        <Route path="/resume" element={<Resume />} />
        
        {/* When the path is `/`, render the entire homepage (excluding MyDocument) */}
        <Route
          path="/"
          element={
            <div>
              <div className="bg-hero-pattern relative z-[999] bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
              </div>
              
              <About />
              <Experience />
              <Tech />
              <Works />
              <Feedbacks />
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>

              <Footer />
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;

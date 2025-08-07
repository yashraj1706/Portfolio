import React from 'react';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Feedbacks, CertificationsPreview, Certifications } from './components';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Resume from './components/Resume';
import { AchievementsMarquee } from './components/AchievementsMarquee';
const App = () => {
  return (
    <div className="relative bg-primary">
      <Routes>
        {/* When the path is `/resume`, only render MyDocument */}
        <Route path="/resume" element={<Resume />} />
        <Route path="/certifications" element={<CertificationsPreview />} />
        <Route path="/certifications/:categoryId" element={<Certifications />} />
        {/* When the path is `/`, render the entire homepage (excluding MyDocument) */}
        <Route
          path="/"
          element={
            <div>
              <div className="bg-hero-pattern relative z-[9] bg-cover bg-repeat bg-fixed">
                {/* bg-cover bg-no-repeat bg-center */}
                <Navbar />
                <Hero />

               
              <About />
              <Experience />
              <AchievementsMarquee />
              <Tech />
              <Works />
              <Feedbacks />
              {/* <StarsCanvas /> */}
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>

              <Footer />
                </div>            

            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;

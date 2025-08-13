import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Hero } from "./components";
import { InViewMount } from "./utils/InViewMount";
import { Analytics } from '@vercel/analytics/react';
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const TechStack = lazy(() => import("./components/TechStack"));
const Projects = lazy(() => import("./components/Projects"));
const Testimonials = lazy(() => import("./components/Testimonials"));

const CertificationsPreview = lazy(() =>
  import("./components/CertificationsPreview")
);
const Certifications = lazy(() => import("./components/Certifications"));
const Resume = lazy(() => import("./components/Resume"));
const AchievementsMarquee = lazy(() =>
  import("./components/AchievementsMarquee")
);
const CanvasRevealEffectDemo = lazy(() =>
  import("./components/CanvasRevealEffectDemo").then((m) => ({
    default: m.CanvasRevealEffectDemo,
  }))
);
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  return (
    <div className="relative bg-primary">
      <Routes>
        {/* When the path is `/resume`, only render MyDocument */}
        <Route
          path="/resume"
          element={
            <Suspense fallback={null}>
              <Resume />
            </Suspense>
          }
        />
        <Route
          path="/certifications"
          element={
            <Suspense fallback={null}>
              <CertificationsPreview />
            </Suspense>
          }
        />
        <Route
          path="/certifications/:categoryId"
          element={
            <Suspense fallback={null}>
              <Certifications />
            </Suspense>
          }
        />
        {/* When the path is `/`, render the entire homepage (excluding MyDocument) */}
        <Route
          path="/"
          element={
            <div className="">
              <div className="bg-hero-pattern relative z-[9] bg-cover bg-repeat">
                {/* bg-cover bg-no-repeat bg-center */}
                <Navbar />
                <Hero />

                <Suspense fallback={null}>
                  <InViewMount>
                    <About />
                  </InViewMount>

                  <InViewMount>
                    <CanvasRevealEffectDemo />
                  </InViewMount>

                  <InViewMount>
                    <Experience />
                  </InViewMount>
                  
                  <InViewMount>
                    <AchievementsMarquee />
                  </InViewMount>

                   <InViewMount>
                    <Testimonials />
                  </InViewMount>
                  
                  <InViewMount>
                    <TechStack />
                  </InViewMount>
                  
                  {/* <InViewMount>
                    <Projects />
                  </InViewMount> */}
                  
                  
                  <div className="relative z-0">
                    <InViewMount>
                      <Contact />
                    </InViewMount>
                    {/* StarsCanvas stays removed for now */}
                  </div>
                  
                  <InViewMount>
                    <Footer />
                  </InViewMount>
                </Suspense>
              </div>
            </div>
          }
        />
      </Routes>
      <Analytics />
    </div>
  );
};

export default App;

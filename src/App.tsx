import React from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { BeyondCode } from './sections/BeyondCode';
import { Notes } from './sections/Notes';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export const App: React.FC = () => {
  return (
    <div className="digital-hq-root">
      {/* Scroll Progress Bar at very top */}
      <ScrollProgress />

      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Landmark */}
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <BeyondCode />
        <Notes />
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Back to top floating button */}
      <BackToTop />
    </div>
  );
};

export default App;

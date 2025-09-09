import './global.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './pages/Hero/Hero'
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
import ParticleBackground from './components/Background/ParticleBackground'
import Experience from './pages/Experience/Experience'
// import ThemeMenuModal from './components/ThemeMenuModal/ThemeMenuModal'
import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    // Handle initial page load with hash
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        if (hash === 'hero') {
          // Scroll to top of page for hero
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        } else {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    };

    // Handle initial load
    handleHashChange();

    // Handle browser back/forward navigation
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      <ParticleBackground
        particleCount={20}
        particleSize={3}
        particleColor1="var(--theme-color)"
        particleColor2="var(--theme-color)"
        particleColor3="var(--theme-color)"
        speed={0.5}
        opacity={0.7}
        blur={true} />
      <Navbar />
      {/* <ThemeMenuModal /> */}

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

export default App;
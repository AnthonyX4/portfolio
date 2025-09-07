import './global.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './pages/Hero/Hero'
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
import ParticleBackground from './components/Background/ParticleBackground'

const App = () => {

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
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
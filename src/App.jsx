import './global.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './pages/Hero/Hero'

const App = () => { 

  return(
    <body>
      <Navbar/>
      <main>
        <Hero />
      </main>
    </body>
  );
}

export default App;
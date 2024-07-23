import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Home from './Containers/home';
import About from './Containers/about';
import Contact from './Containers/contact';
import Portfolio from './Containers/portfolio';
import Resume from './Containers/resume';
import Skills from './Containers/skills'; 
import Navbar from './Components/navbar';
import particlesConfig from "./utils/particlesConfig"; // Import particle configuration

function App() {
  
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <div className="App">
      {/* particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig} // Use imported particle configuration
      />

      {/* Navbar */}
      <Navbar/>

      {/* main page container */}
      <div className="App_main-page-content">
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

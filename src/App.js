import React from 'react';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar'
import Skills from './Components/Skills/Skills';
import Works from './Components/Works/Works';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="">
      <Navbar />
      <Intro />
      <Skills/>
      <Works />
      <Contact/>
      <Footer />
      
    </div>
  );
}

export default App;

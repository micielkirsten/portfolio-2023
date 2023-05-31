import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import NavBar from './Components/Navbar';
import './App.css';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['League Spartan:400,700'] // Replace 'YourFontName' with the name of your font and add any additional variations you have (e.g., 400, 700)
  }
});

function Main() {
  const typingTextRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Hello, I'm Kirsten!", "And I am a Full-Stack Engineer", "Embrace innovation with confidence."],
      typeSpeed: 50,
      backSpeed: 20,
      loop: false
    };
  
    const typed = new Typed(typingTextRef.current, options);
  
    return () => {
      typed.destroy();
    };
  }, []);
  
  return (
    <div style={{ position: 'absolute', overflowY: 'hidden', height: '100vh', width: '100vw', backgroundColor: "#273469" }}>
      <div>
        <NavBar />
      </div>
      <div id="typing-text" ref={typingTextRef}>

      </div>
    </div>
  );
}

export default Main;

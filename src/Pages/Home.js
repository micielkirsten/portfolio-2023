import React, { useEffect, useRef } from 'react';
import './Pages.scss';
import Typed from 'typed.js';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
      families: ['League Spartan:400,700'] 
    }
  });

const Home = () => {
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
    <div> 
      <div id="typing-text" ref={typingTextRef}>
      </div>
    </div>
  );
};

export default Home; 
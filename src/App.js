import React from 'react'; 
import NavBar from './Components/Navbar';
import './App.css';

function Main() {
  return (
    <div style={{ position: 'absolute', overflowY: 'hidden', height: '100vh', width: '100vw', backgroundColor: "#273469" }}>
      <div>
        <NavBar />
      </div>
    </div>
  );
}

export default Main;

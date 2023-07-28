import React from 'react';
import { useNavigate } from 'react-router-dom';


const NavBar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/home');
  };
  const handleExperienceClick = () => {
    navigate('/experience');
  };
  const handleProjectsClick = () => {
    navigate('/projects');
  };
  const handleContactClick = () => {
    navigate('/contacts');
  };

  return (
    <div style={{ position: 'fixed', top: '0', width: "100%", backgroundColor: 'inherit' }}>
      <ul style={{ display: "flex", listStyleType: "none", margin: 0, padding: 0 }}>
        <li style={{  top: '0', left: '0', padding: '5px' }}>
          <img src={process.env.PUBLIC_URL + '/portfoliologo.png'} alt="Logo" />
        </li>
        <li style={{ marginLeft: "62%", padding: '5px' }}>
          <button onClick={handleHomeClick} style={{ fontWeight: 400, fontSize: '16px', lineHeight: '24px', display: 'flex', alignItems: 'center', color: '#B0B2C3', background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'League Spartan' }}>Home</button>
        </li>
        <li style={{ marginLeft: "5%", padding: '5px' }}>
          <button onClick={handleExperienceClick} style={{ fontWeight: 400, fontSize: '16px', lineHeight: '24px', display: 'flex', alignItems: 'center', color: '#B0B2C3', background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'League Spartan' }}>Experience</button>
        </li>
        <li style={{ marginLeft: "5%", padding: '5px' }}>
          <button onClick={handleProjectsClick} style={{ fontWeight: 400, fontSize: '16px', lineHeight: '24px', display: 'flex', alignItems: 'center', color: '#B0B2C3', background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'League Spartan' }}>Projects</button>
        </li>
        <li style={{ marginLeft: "5%", padding: '5px' }}>
          <button onClick={handleContactClick} style={{ fontWeight: 400, fontSize: '16px', lineHeight: '24px', display: 'flex', alignItems: 'center', color: '#B0B2C3', background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'League Spartan' }}>Contact</button>
        </li>
      </ul>
    </div>
  )
}

export default NavBar; 
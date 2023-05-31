import React from 'react';

function NavBar(){
    return(
        <div style={{height: "10%", width: "100%", backgroundColor: "#273469"}}>
        <ul style={{ display: "flex", listStyleType: "none", margin: 0, padding: 0 }}>
            <li style={{ position: 'fixed', top: '0', left: '0', padding: '10px' }}>
                <img src={process.env.PUBLIC_URL + '/portfoliologo.png'} alt="Logo" />
            </li>
            <li style={{ marginLeft: "70%", padding: '10px' }}>
                <button  style={{ fontWeight: 400, fontSize: '16px',lineHeight: '24px', display: 'flex', alignItems: 'center', color: '#B0B2C3', background: 'none', border: 'none', padding: 0,cursor: 'pointer'}}>Experience</button>
            </li>
            <li style={{ marginLeft: "5%", padding: '10px' }}>
                <button  style={{ fontWeight: 400, fontSize: '16px',lineHeight: '24px', display: 'flex', alignItems: 'center', color: '#B0B2C3', background: 'none', border: 'none', padding: 0, cursor: 'pointer'}}>Projects</button>
            </li>
            <li style={{ marginLeft: "5%", padding: '10px'}}>
                <button  style={{ fontWeight: 400, fontSize: '16px',lineHeight: '24px', display: 'flex', alignItems: 'center', color: '#B0B2C3', background: 'none',border: 'none',padding: 0,cursor: 'pointer'}}>Contact</button>
            </li>
        </ul>
    </div>
    )
}

export default NavBar; 
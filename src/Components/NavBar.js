import React from 'react';
import navBar from '../Assets/Path Copy 8.png';
import network from '../Assets/Cellular Connection.png';
import wifi from '../Assets/Wifi.png';
import battery from '../Assets/Battery.png';

function NavBar() {

    let hours = (new Date().getHours() + 24) % 12 || 12;
    let minutes = new Date().getMinutes();
    let updatedMinutes = "0" + minutes;

    return (
        <>
            <img src={navBar} alt="nab-bar-bg" />
            <nav style={{ position: "absolute", display: "flex", alignItems: "center", margin: "-5px 20px 0 25px", width: "330px", top: "0px" }}>
                <p style={{ flexGrow: 1, color: "#3c64c7", fontSize: "14px" }}>{hours}:{minutes < 10 ? updatedMinutes : minutes}</p>
                <img src={network} alt="network-icon" />
                <img src={wifi} alt="wifi-icon" style={{ marginRight: "5px", marginLeft: "5px" }} />
                <img src={battery} alt="battery-icon" />
            </nav>
        </>
    )
}

export default NavBar;

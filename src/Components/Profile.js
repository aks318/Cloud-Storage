import React, { useState } from 'react';
import NavBar from './NavBar.js';
import { Link } from 'react-router-dom';
import ProfileEditIcon from '../Assets/profile_edit_icon.png';
import UserDetails from '../Assets/User details.png';
import IconRight from '../Assets/icon_right.png';
import BottomNavBar from './BottomNavBar.js';


function Profile() {

    const [switchStyle1, setSwitchStyle1] = useState(true);

    const [switchStyle2, setSwitchStyle2] = useState(false);

    const switchOn = () => {
        return (
            <div style={{
                width: "45px", height: "20px", backgroundColor: "#5786fb", borderRadius: "20px",
                padding: "5px", cursor: "pointer"
            }}>
                <div style={{
                    width: "20px", height: "20px", backgroundColor: "#fff", borderRadius: "100px",
                    transform: "translateX(25px)"
                }}></div>
            </div>
        );
    };

    const switchOff = () => {
        return (
            <div style={{
                width: "45px", height: "20px", backgroundColor: "#959fba", borderRadius: "20px",
                padding: "5px", cursor: "pointer"
            }}>
                <div style={{
                    width: "20px", height: "20px", backgroundColor: "#fff", borderRadius: "100px",
                    transform: "translateX(0)"
                }}></div>
            </div>
        );
    };


    return (
        <>

            <div>

                <NavBar />


                <div style={{ display: "flex", alignItems: "center", padding: "20px 35px" }}>
                    <p style={{ fontSize: "34px", color: "#345095", display: "flex", flexGrow: 1, margin: 0 }}>
                        Profile
                </p>
                    <Link to="#" style={{ textDecoration: "none" }}>
                        <img src={ProfileEditIcon} alt="Cloud Upload Icon" />
                    </Link>
                </div>


                <div style={{ paddingLeft: "20px" }}>
                    <img src={UserDetails} alt="Profile" />
                </div>


                <div style={{ margin: "0 35px 0 35px", display: "flex", flexDirection: "row" }}>
                    <div style={{ display: "flex", flexDirection: "row", flexGrow: 1 }}>
                        <p style={{ fontSize: "24px", color: "#3c64c7", margin: 0, }}>
                            32.5 GB free
                    </p>
                        <p style={{ fontSize: "18px", color: "#abc3fc", margin: "5px 0 0 0" }}>
                            &ensp;of 100 GB
                    </p>
                    </div>

                </div>


                <div style={{ width: "305px", margin: "5px 35px 20px 35px", backgroundColor: "#abc3fc", height: "6px", borderRadius: "5px" }}>
                    <div style={{ width: "160.4px", backgroundColor: "#ff6aa2", height: "6px", borderRadius: "5px" }}></div>
                </div>


                <div style={{
                    border: "3px solid #ff6aa2", borderRadius: "30px", width: "305px", height: "40px", margin: "0 0 30px 35px",
                    display: 'flex', alignItems: "center", justifyContent: "center", cursor: "pointer"
                }}>
                    <p style={{ fontSize: "16px", color: "#ff6aa2", margin: 0 }}>
                        Increase Storage Space
                </p>
                </div>


                <div style={{ height: "300px", overflow: "auto" }}>

                    <Link to="StorageManagement" style={{ textDecoration: "none" }}>
                        <div style={{
                            display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f5f7fc",
                            borderRadius: "10px", padding: "0 20px", margin: "0 0 20px 35px", width: "265px", height: "60px"
                        }}>
                            <p style={{ color: "#000", display: "flex", flexGrow: 1, margin: 0 }}>
                                Storage Management
                        </p>

                            <img src={IconRight} alt="Icon Right" />

                        </div>
                    </Link>

                    <Link to="#" style={{ textDecoration: "none" }}>
                        <div style={{
                            display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f5f7fc",
                            borderRadius: "10px", padding: "0 20px", margin: "0 0 20px 35px", width: "265px", height: "80px"
                        }}>
                            <div style={{
                                paddingTop: 0, height: "52px", display: "flex", justifyContent: "center",
                                flexDirection: "column", flexGrow: 1
                            }}>
                                <p style={{ color: "#000", margin: 0 }}>
                                    Devices
                            </p>
                                <p style={{ fontSize: "14px", color: "#959fba", margin: 0 }}>
                                    iPhone, MacBook, iPad
                            </p>
                            </div>

                            <img src={IconRight} alt="Icon Right" />

                        </div>
                    </Link>

                    <div style={{
                        display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f5f7fc",
                        borderRadius: "10px", padding: "0 20px", margin: "0 0 20px 35px", width: "265px", height: "60px"
                    }}>
                        <p style={{ color: "#000", display: "flex", flexGrow: 1, margin: 0 }}>
                            Camera Uploads
                    </p>
                        <div onClick={() => setSwitchStyle1(!switchStyle1)}>
                            {switchStyle1 ? switchOn() : switchOff()}
                        </div>
                    </div>


                    <div style={{
                        display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f5f7fc",
                        borderRadius: "10px", padding: "0 20px", margin: "0 0 35px 35px", width: "265px", height: "60px"
                    }}>
                        <p style={{ color: "#000", display: "flex", flexGrow: 1, margin: 0 }}>
                            Use data for file transfer
                    </p>
                        <div onClick={() => setSwitchStyle2(!switchStyle2)}>
                            {switchStyle2 ? switchOn() : switchOff()}
                        </div>
                    </div>

                </div>


                <BottomNavBar />


            </div>

        </>
    );
};


export default Profile;

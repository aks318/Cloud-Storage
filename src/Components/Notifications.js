import React from 'react';
import NavBar from './NavBar.js';
import notificationsIllustration from '../Assets/illustration_notifications.png';
import BottomNavBar from './BottomNavBar.js';


function Notifications() {

    return (

        <>

            <div className="notifications">

                <div style={{ width: "375px", height: "812px", backgroundColor: "#fff", position: "relative" }}>

                    <NavBar />

                    <p style={{
                        marginLeft: "35px", marginTop: "15px", fontSize: "34px",
                        fontWeight: "600", color: "#345095"
                    }}>
                        Notifications</p>

                    <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
                        <img src={notificationsIllustration} alt="no-notifications" />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "15px" }}>
                        <p style={{
                            textAlign: "center", fontSize: "20px", fontWeight: "600",
                            margin: "20px 0px 5px 0px", color: "#3c64c7"
                        }}>
                            No notifications yet</p>
                        <p style={{
                            textAlign: "center", fontSize: "15px", fontWeight: "600",
                            margin: "5px 40px", color: "#959fba"
                        }}>
                            Here you will see the external changes in your shared folders, tags from your peers and other updates</p>
                    </div>

                    <BottomNavBar />

                </div>

            </div>


        </>
    );
};


export default Notifications

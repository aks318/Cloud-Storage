import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Upload from './Upload.js';
import HomeCloudIcon from '../Assets/home_cloud_icon_tab.png';
import LocalStorageIcon from '../Assets/local_storage_icon_tab.png';
import UploadIcon from '../Assets/upload_icon_tab.png';
import NotificationsIcon from '../Assets/notifications_icon_tab.png';
import ProfileIcon from '../Assets/profile_icon_tab.png';


function BottomNavBar() {

    const [showUploadBox, setShowUploadBox] = useState(false);


    const bottomNavBarData1 = [
        {
            id: 1,
            icon: HomeCloudIcon,
            link: "Home",
            alt: "Home CLoud Icon",
        },
        {
            id: 2,
            icon: LocalStorageIcon,
            link: "LocalStorage",
            alt: "Local Storage Icon",
        },
    ];

    const bottomNavBarData2 = [
        {
            id: 1,
            icon: NotificationsIcon,
            link: "Notifications",
            alt: "Notifications Icon",
        },
        {
            id: 2,
            icon: ProfileIcon,
            link: "Profile",
            alt: "Profile Icon",
        },
    ];


    const BottomNavigation1 = (navBarIcon1) => {
        return (

            <Link to={navBarIcon1.link} >
                <img src={navBarIcon1.icon} alt={navBarIcon1.alt} />
            </Link>

        );
    };


    const BottomNavigation2 = (navBarIcon2) => {
        return (

            <Link to={navBarIcon2.link}>
                <img src={navBarIcon2.icon} alt={navBarIcon2.alt} />
            </Link>

        );
    };


    const BottomNavigationGrid1 = (navBarIcons1) => {
        return (
            <BottomNavigation1
                key={navBarIcons1.id}
                icon={navBarIcons1.icon}
                link={navBarIcons1.link}
                alt={navBarIcons1.alt}
            />
        );
    };


    const BottomNavigationGrid2 = (navBarIcons2) => {
        return (
            <BottomNavigation2
                key={navBarIcons2.id}
                icon={navBarIcons2.icon}
                link={navBarIcons2.link}
                alt={navBarIcons2.alt}
            />
        );
    };


    return (
        <>
            {showUploadBox ?

                <Upload /> :

                <div style={{
                    display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around",
                    boxShadow: "0px 4px 14px 0px rgba(166, 179, 194, 0.3)", padding: "10px 0 35px 0", bottom: "0",
                    position: "fixed", width: "375px", backgroundColor: "#fff"
                }}>
                    {bottomNavBarData1.map(BottomNavigationGrid1)}

                    <img src={UploadIcon} alt="Upload Icon" onClick={() => setShowUploadBox(true)} style={{ cursor: "pointer" }} />

                    {bottomNavBarData2.map(BottomNavigationGrid2)}
                </div>

            }

        </>

    );
};


export default BottomNavBar;
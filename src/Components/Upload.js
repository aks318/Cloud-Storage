import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScanIcon from '../Assets/scan_icon.png';
import PhotoClickIcon from '../Assets/photo_click_icon.png';
import UploadIcon from '../Assets/upload_icon.png';
import CloseIcon from '../Assets/close_icon.png';
import BottomNavBar from './BottomNavBar.js';


function Upload() {

    const [uploadBoxOpen, setUploadBoxOpen] = useState(true);

    const uploadBoxClose = () => {
        setUploadBoxOpen(false);
    }

    const uploadModalBoxData = [
        {
            id: 1,
            icon: ScanIcon,
            text: "Scan",
            alt: "Scan QR Icon",
        },
        {
            id: 2,
            icon: PhotoClickIcon,
            text: "Photo",
            alt: "Photo Click Icon",
        },
        {
            id: 3,
            icon: UploadIcon,
            text: "Upload",
            alt: "Upload Icon",
        },
    ];


    const UploadNavigation = (navBarIcon) => {
        return (

            <Link to="#" style={{ textDecoration: "none", padding: "5px" }}>
                <img src={navBarIcon.icon} alt={navBarIcon.alt} />
                <p style={{ textAlign: "center",  color: "#959fba", margin: "2px 0 0 0" }}>
                    {navBarIcon.text}
                </p>
            </Link>

        );
    };

    const UploadNavigationGrid = (navBarIcons) => {
        return (
            <UploadNavigation
                key={navBarIcons.id}
                icon={navBarIcons.icon}
                text={navBarIcons.text}
                alt={navBarIcons.alt}
            />
        );
    };


    return (
        <>
            {uploadBoxOpen ?
                <>
                    <div style={{
                        backgroundColor: "rgba(0,0,0,0.5)", width: "375px",
                        height: "812px", position: "fixed", top: "0"
                    }} onClick={uploadBoxClose}></div>

                    <div style={{
                        display: "flex", flexDirection: "column", alignItems: "center", borderRadius: "35% 35% 0 0",
                        padding: "35px 0 25px 0", bottom: "0", position: "fixed", width: "375px", backgroundColor: "#fff", zIndex: 1
                    }}>

                        <div style={{
                            width: "275px", display: "flex", flexDirection: "row",
                            justifyContent: "space-around", marginBottom: "10px"
                        }}>
                            {uploadModalBoxData.map(UploadNavigationGrid)}
                        </div>

                        <div>
                            <img src={CloseIcon} alt="Close Icon" style={{
                                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center"
                            }} onClick={uploadBoxClose} />
                        </div>

                    </div>
                    {/* </div> */}
                </>
                :
                <BottomNavBar />

            }

        </>
    );
};


export default Upload;

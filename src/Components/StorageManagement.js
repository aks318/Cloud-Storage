import React, { useState } from 'react';
import NavBar from './NavBar.js';
import { Link } from 'react-router-dom';
import ArrowLeft from '../Assets/arrow_left_icon.png';
import SmallImageIcon from '../Assets/images_icon.png';
import SmallMusicIcon from '../Assets/music_icon.png';
import SmallArchiveIcon from '../Assets/archive_icon.png';
import MoreIcon from '../Assets/more_icon.png';
import BottomNavBar from './BottomNavBar.js';


function StorageManagement() {


    const [folderOpen, setFoldersOpen] = useState(true);

    const foldersClose = () => {
        setFoldersOpen(false);
    };

    const foldersReopen = () => {
        setFoldersOpen(true);
    };


    const [filesStyle, setFilesStyle] = useState();

    const changeFilesStyleOnClick = () => {
        setFilesStyle({
            display: "block",
            backgroundColor: "#5786f8",
            height: "4px",
            borderRadius: "35px 35px 0 0",
        }, setFoldersStyle({
            display: "none"
        }));

        foldersClose();
    };

    const [foldersStyle, setFoldersStyle] = useState({
        display: "block",
        backgroundColor: "#5786f8",
        height: "4px",
        borderRadius: "35px 35px 0 0",
    });

    const changeFoldersStyleOnClick = () => {
        setFoldersStyle({
            display: "block",
            backgroundColor: "#5786f8",
            height: "4px",
            borderRadius: "35px 35px 0 0",
        }, setFilesStyle({
            display: "none"
        }));

        foldersReopen();
    };


    const localStorageData2 = [
        {
            id: 1,
            icon: SmallMusicIcon,
            text1: "Bad Liar - Imagine Dragons",
            text2: "mp3 - 8.2MB",
            alt: "Small Music Icon",
        },
        {
            id: 2,
            icon: SmallImageIcon,
            text1: "Profile Pic",
            text2: "jpg - 3.4MB",
            alt: "Small Image Icon",
        },
        {
            id: 3,
            icon: SmallArchiveIcon,
            text1: "Crop Project Archive",
            text2: "zip - 80MB",
            alt: "Small Archive Icon",
        },
        {
            id: 4,
            icon: SmallMusicIcon,
            text1: "Document",
            text2: "doc - 20MB",
            alt: "Large Doc Icon",
        },
        {
            id: 5,
            icon: SmallImageIcon,
            text1: "Movies",
            text2: "mkv - 9GB",
            alt: "Small Video Icon",
        },
    ];


    const StorageIcons2 = (storageIcon2) => {
        return (

            <div style={{ height: "52px", width: "305px", margin: "0px 35px 30px 35px", display: "flex", flexDirection: "row", alignItems: "center" }}>

                <img src={storageIcon2.icon} alt={storageIcon2.alt} />
                <div style={{
                    paddingTop: "0", height: "52px", marginLeft: "20px", display: "flex", flexDirection: "column",
                    justifyContent: "center", flexGrow: 1
                }}>
                    <p style={{  margin: 0 }}>
                        {storageIcon2.text1}
                    </p>
                    <p style={{  fontSize: "14px", color: "#959fba", margin: 0 }}>
                        {storageIcon2.text2}
                    </p>
                </div>
                <img src={MoreIcon} alt="More Icon" />

            </div>

        );
    };

    const StorageIconsGrid2 = (storageIcons2) => {
        return (
            <StorageIcons2
                key={storageIcons2.id}
                icon={storageIcons2.icon}
                text1={storageIcons2.text1}
                text2={storageIcons2.text2}
                alt={storageIcons2.alt}
            />
        );
    };



    return (
        <>

            <div className="storage-management">

                <NavBar />


                <div style={{ display: "flex", alignItems: "center", padding: "20px 35px 35px 35px" }}>
                    <Link to="Profile" style={{ textDecoration: "none" }}>
                        <img src={ArrowLeft} alt="Back Arrow Icon" />
                    </Link>
                    <p style={{ fontSize: "18px", color: "#345095", margin: "0 0 0 30px" }}>
                        Storage Management
                </p>
                </div>


                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ height: "250px", width: "250px", borderRadius: "50%", border: "10px solid #2196f3", backgroundColor: "#abc3fc", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div style={{ height: "125px", width: "125px", backgroundColor: "#fff", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <p style={{ fontSize: "22px", color: "#345095", margin: 0 }}>32.5 GB</p>
                        </div>
                    </div>
                </div>


                <div style={{ margin: "10px 0 0 0", padding: "15px 0", width: "375px", overflow: "auto", display: "flex", alignItems: "center", flexDirection: "row" }}>

                    <div style={{ marginLeft: "35px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <div style={{ backgroundColor: "#2196f3", height: "16px", width: "16px", borderRadius: "6px" }}></div>
                        <p style={{ textAlign: "center", fontSize: "15px", color: "#959fba", margin: "2px 0 0 0" }}>
                            Music
                    </p>
                    </div>

                    <div style={{ marginLeft: "15px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <div style={{ backgroundColor: "#ffc107", height: "16px", width: "16px", borderRadius: "6px" }}></div>
                        <p style={{ textAlign: "center", fontSize: "15px", color: "#959fba", margin: "2px 0 0 0" }}>
                            Images
                    </p>
                    </div>

                    <div style={{ marginLeft: "15px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <div style={{ backgroundColor: "#4ac367", height: "16px", width: "16px", borderRadius: "6px" }}></div>
                        <p style={{ textAlign: "center", fontSize: "15px", color: "#959fba", margin: "2px 0 0 0" }}>
                            Archives
                    </p>
                    </div>

                    <div style={{ marginLeft: "15px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <div style={{ backgroundColor: "#8d6e63", height: "16px", width: "16px", borderRadius: "6px" }}></div>
                        <p style={{ textAlign: "center", fontSize: "15px", color: "#959fba", margin: "2px 0 0 0" }}>
                            Documents
                    </p>
                    </div>

                    <div style={{ marginLeft: "15px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <div style={{ backgroundColor: "#00bcd4", height: "16px", width: "16px", borderRadius: "6px" }}></div>
                        <p style={{ textAlign: "center", fontSize: "15px", color: "#959fba", margin: "2px 0 0 0" }}>
                            Videos
                    </p>
                    </div>

                    <div style={{ marginLeft: "15px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <div style={{ backgroundColor: "#da5df5", height: "16px", width: "16px", borderRadius: "6px" }}></div>
                        <p style={{ textAlign: "center", fontSize: "15px", color: "#959fba", margin: "2px 0 0 0" }}>
                            Cache
                    </p>
                    </div>

                </div>



                <div style={{ borderBottom: "2px solid #d3d7e0", width: "375px", display: "flex", flexDirection: "row", overflow: "auto" }}>

                    <div style={{ width: "300px", margin: "0 30px 0 35px", cursor: "pointer" }} onClick={changeFilesStyleOnClick}>
                        <p style={{ textTransform: "uppercase", fontSize: "13px", color: "#959fba", textAlign: "center" }}>
                            Least Used
                    </p>
                        <div style={filesStyle}></div>
                    </div>
                    <div style={{ width: "300px", margin: "0 30px 0 0", cursor: "pointer" }} onClick={changeFoldersStyleOnClick}>
                        <p style={{ textTransform: "uppercase", fontSize: "13px", color: "#959fba", textAlign: "center" }}>
                            Latest Accessed
                    </p>
                        <div style={foldersStyle}></div>
                    </div>

                </div>


                {folderOpen ?

                    <div style={{ width: "375px", height: "150px", paddingTop: "30px", display: "flex", flexDirection: "column", overflow: "auto" }}>
                        {localStorageData2.map(StorageIconsGrid2)}
                    </div>

                    : null}


                <BottomNavBar />
            </div>

        </>
    );
};


export default StorageManagement;

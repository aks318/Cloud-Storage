import React, { useState } from 'react';
import NavBar from './NavBar.js';
import CloudUploadIcon from '../Assets/buttons_small.png';
import BottomNavBar from './BottomNavBar.js';
import { Link } from 'react-router-dom';
import MoreIcon from '../Assets/more_icon.png';
import "../Css/Home.css"


function Home() {

    const [folderOpen, setFolderOpen] = useState(true);

    const folderClose = () => {
        setFolderOpen(false);
    };

    const folderReopen = () => {
        setFolderOpen(true);
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

        folderClose();
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

        folderReopen();
    };



    const foldersData = [
        {
            id: 1,
            text1: "The next big thing",
            text2: "12 f - 2.1GB",
        },
        {
            id: 2,
            text1: "Top secret",
            text2: "7 f - 523MB",
        },
        {
            id: 3,
            text1: "Freebie",
            text2: "3 f - 192MB",
        },
        {
            id: 4,
            text1: "London Meetup",
            text2: "453 f - 1.7GB",
        },
        {
            id: 5,
            text1: "Books",
            text2: "8 f - 50MB",
        },
        {
            id: 6,
            text1: "Documents",
            text2: "3 f - 25MB",
        },
    ];


    const FolderIcons = (folderIcon) => {
        return (

            <div className = "folderDiv">

                <div className = "folderTextDiv">
                    <div className = "folderText">
                        <p style={{ margin: "10px 0 0 0" }}>
                            {folderIcon.text1}
                        </p>
                        <p style={{ fontSize: "14px", color: "#959fba", margin: 0 }}>
                            {folderIcon.text2}
                        </p>
                    </div>

                    <img src={MoreIcon} alt="More Icon" />
                </div>

            </div>

        );
    };

    const FolderIconsGrid = (folderIcons) => {
        return (
            <FolderIcons
                key={folderIcons.id}
                text1={folderIcons.text1}
                text2={folderIcons.text2}
            />
        );
    };



    return (
        <>

            <div style={{ backgroundColor: "#5061e9" }}>
                <NavBar />

                <p style={{ margin: "15px 0 0 35px",  fontSize: "34px", color: "#fff" }}>
                    Hello Aakash,
            </p>
                <p style={{ margin: "0 0 0 35px",  fontSize: "20px", color: "#d3d7e0" }}>
                    at the moment you have
            </p>

                <div style={{ margin: "15px 35px 0 35px", display: "flex", flexDirection: "row" }}>
                    <div style={{ display: "flex", flexDirection: "row", flexGrow: 1 }}>
                        <p style={{  fontSize: "24px", color: "#fff", margin: 0, }}>
                            32.5 GB
                    </p>
                        <p style={{ fontSize: "18px", color: "#d3d7e0", margin: "5px 0 0 0" }}>
                            &ensp;of 100 GB free
                    </p>
                    </div>
                    <Link to="#" style={{ textDecoration: "none" }}>
                        <img src={CloudUploadIcon} alt="Cloud Upload Icon" style={{ width: "32px", height: "32px" }} />
                    </Link>
                </div>

                <div style={{ width: "305px", margin: "5px 35px 40px 35px", backgroundColor: "#3c64c7", height: "6px", borderRadius: "5px" }}>
                    <div style={{ width: "160.4px", backgroundColor: "#ff6aa2", height: "6px", borderRadius: "5px" }}></div>
                </div>

                <div style={{
                    borderRadius: "40px 40px 0 0", backgroundColor: "#fff", display: "flex",
                    flexDirection: "column", paddingTop: "30px", marginBottom: "90px"
                }}>

                    <input type="search" name="search" placeholder="Search" className = "search" />

                    <div className = "fileFolder">
                        <div className = "fileHeaderDiv" onClick={changeFilesStyleOnClick}>
                            <p className = "fileFolderP">
                                Files
                        </p>
                            <div style={filesStyle}></div>
                        </div>
                        <div className = "folderHeaderDiv" onClick={changeFoldersStyleOnClick}>
                            <p className = "fileFolderP">
                                Folders
                        </p>
                            <div style={foldersStyle}></div>
                        </div>
                    </div>

                    {folderOpen ?

                        <div className = "folderOpen">
                            {foldersData.map(FolderIconsGrid)}
                        </div>

                        : null}

                </div>

                <BottomNavBar />
            </div>

        </>
    );
};


export default Home;

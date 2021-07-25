import React from 'react';
import LargeVideoIcon from '../Assets/big_videos_icon.png';
import LargeImageIcon from '../Assets/big_images_icon.png';
import LargeMusicIcon from '../Assets/big_music_icon.png';
import LargeArchiveIcon from '../Assets/big_archive_icon.png';
import SmallImageIcon from '../Assets/images_icon.png';
import SmallMusicIcon from '../Assets/music_icon.png';
import SmallArchiveIcon from '../Assets/archive_icon.png';
import MoreIcon from '../Assets/more_icon.png';
import NavBar from './NavBar.js';
import BottomNavBar from './BottomNavBar.js';
import "../Css/LocalStorage.css"


function LocalStorage() {


    const localStorageData1 = [
        {
            id: 1,
            icon: LargeVideoIcon,
            text: "Videos",
            alt: "Large Video Icon",
        },
        {
            id: 2,
            icon: LargeImageIcon,
            text: "Images",
            alt: "Large Image Icon",
        },
        {
            id: 3,
            icon: LargeMusicIcon,
            text: "Music",
            alt: "Large Music Icon",
        },
        {
            id: 4,
            icon: LargeArchiveIcon,
            text: "Archives",
            alt: "Large Archive Icon",
        },
        {
            id: 5,
            icon: LargeVideoIcon,
            text: "Videos",
            alt: "Large Video Icon",
        },
        {
            id: 6,
            icon: LargeImageIcon,
            text: "Images",
            alt: "Large Image Icon",
        },
    ];


    const StorageIcons1 = (storageIcon1) => {
        return (

            <div style={{ marginLeft: "35px" }}>
                <img src={storageIcon1.icon} alt={storageIcon1.alt} />
                <p style={{ textAlign: "center", fontSize: "15px", color: "#959fba", margin: "2px 0 0 0" }}>
                    {storageIcon1.text}
                </p>
            </div>

        );
    };

    const StorageIconsGrid1 = (storageIcons1) => {
        return (
            <StorageIcons1
                key={storageIcons1.id}
                icon={storageIcons1.icon}
                text={storageIcons1.text}
                alt={storageIcons1.alt}
            />
        );
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

            <div className = "StorageIcon2">

                <img src={storageIcon2.icon} alt={storageIcon2.alt} />
                <div className = "StorageIcon2Text">
                    <p style={{ margin: 0 }}>
                        {storageIcon2.text1}
                    </p>
                    <p style={{ fontSize: "14px", color: "#959fba", margin: 0 }}>
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

            <div className="local-storage">
                <NavBar />

                <p style={{ margin: "15px 0 20px 35px", fontSize: "34px", fontWeight: "600", color: "#345095" }}>
                    Local Storage
            </p>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <input type="search" name="search" placeholder="Search" className = "search" />
                </div>

                <div style={{ margin: "25px 0 20px 0", padding: "15px 0", width: "375px", overflow: "auto", display: "flex", alignItems: "center", flexDirection: "row" }}>
                    {localStorageData1.map(StorageIconsGrid1)}
                </div>

                <div style={{ width: "375px", height: "330px", marginBottom: "100px", display: "flex", flexDirection: "column", overflow: "auto" }}>
                    {localStorageData2.map(StorageIconsGrid2)}
                </div>

                <BottomNavBar />
            </div>

        </>
    );
};


export default LocalStorage;
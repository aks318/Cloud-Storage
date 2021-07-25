import React from 'react';
import illustration from '../Assets/Illustration.png';
import { Link } from 'react-router-dom';
import iconBtn from '../Assets/icons_tab bar_stats copy.png';
import "../Css/Onboarding.css"


function Onboarding() {
    return (
        <>

            <div className="onboarding">

                <>
                    <img src={illustration} alt="illus1" />

                    <p className = "para">
                        Your cloud storage safe and sound
                    </p>

                    <Link to="Home">
                        <img src={iconBtn} alt="icon1" className = "img"/>
                    </Link>
                </>

            </div>

        </>
    );
};


export default Onboarding;
import React, { useContext } from "react";
import "./Profile.css";
import CoverImg from "../../assets/images/sto2.jpg";
import Posts from "../Posts/Posts.jsx";
import { myContext } from "../../App.js";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import propho from "../../assets/images/sto2.jpg";

function Profile() {

    const { mode } = useContext(myContext);

    return (
        <div className="profileMain" style={{ backgroundColor: !mode && "#333", color: !mode && "white" }}>
            <img src={CoverImg} alt="" className="coverImg" />
            <div className="sec2Pro" style={{ backgroundColor: !mode && "#222", color: !mode && "white" }}>
                <img src={propho} alt="" className="proPhoto" />
                <div className="icons">
                    <FacebookIcon style={{ cursor: "pointer" }} className="samue" />
                    <InstagramIcon style={{ cursor: "pointer" }} className="samue" />
                    <XIcon style={{ cursor: "pointer" }} className="samue" />
                    <LinkedInIcon style={{ cursor: "pointer" }} className="samue" />
                    <RedditIcon style={{ cursor: "pointer" }} className="samue" />
                </div>
                <div className="detailsPro" >
                    <div className="namePro">Jhon Joe</div>
                    <div className="locationLang">
                        <div><FmdGoodIcon style={{ fontSize: "12" }} /> India</div>
                        <div><LanguageIcon style={{ fontSize: "12" }} /> Tamil</div>
                    </div>
                    <button>follow</button>
                </div>
                <div className="thirDiv">
                    <EmailOutlinedIcon style={{ cursor: "pointer" }} className="rightSiders"/>
                    <MoreVertOutlinedIcon style={{ cursor: "pointer" }} className="rightSiders"/>
                </div>
            </div>
            <div className="profilePosts">
                <Posts />
                <Posts />
                <Posts />
            </div>
        </div>
    );
}

export default Profile;
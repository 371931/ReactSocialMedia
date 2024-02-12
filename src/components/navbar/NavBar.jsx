import React, { useContext, useEffect } from "react";
import "./NavBar.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Avatar from '@mui/material/Avatar';
import GridViewIcon from '@mui/icons-material/GridView';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { myContext } from "../../App";

function NavBar() {

    const { mode, updateMode } = useContext(myContext);

    useEffect(()=>{
        console.log(mode);
    })

    function onCliFocus() {
        document.querySelector("#searchBar").focus();
    }


    function onClickMode(moder) {
        if (moder == "dark") {
            updateMode(false);
            document.querySelector("body").style.backgroundColor = "#222";
        } else {
            updateMode(true);
            document.querySelector(".nav").style.backgroundColor = "#222";
        }
    }

    const cur = { cursor: "pointer"};

    return (
        <div className="nav" style={{backgroundColor: !mode && "#222",color: !mode && "white"}}>
            <div className="nav-left">
                <div className="appName">LevelUp</div>
                <HomeOutlinedIcon style={cur} />
                {mode ? <LightModeOutlinedIcon onClick={() => { onClickMode("dark") }} style={cur} /> : <DarkModeOutlinedIcon onClick={() => { onClickMode("sun") }} style={cur} />}
                <GridViewIcon style={cur} />
                <div className="search">
                    <SearchOutlinedIcon onClick={onCliFocus} className="icon" style={cur} />
                    <input type="text" name="serach" id="searchBar" placeholder="search..." style={{backgroundColor: !mode && "#222",color: !mode && "white",borderColor: !mode && "#555"}} />
                </div>
            </div>
            <div className="nav-right">
                <PersonOutlineOutlinedIcon style={cur} />
                <EmailOutlinedIcon style={cur} />
                <NotificationsNoneOutlinedIcon style={cur} />
                <div style={cur} ><Avatar /> Samuel Raj</div>
            </div>
        </div>
    );
}

export default NavBar;
import React from "react";
import "./NavBar.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Avatar from '@mui/material/Avatar';
import GridViewIcon from '@mui/icons-material/GridView';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function NavBar() {

    function onCliFocus(){
        document.querySelector("#searchBar").focus();
    }

    return (
        <div className="nav">
            <div className="nav-left">
                <div className="appName">LevelUp</div>
                <HomeOutlinedIcon style={{cursor:"pointer"}} />
                <DarkModeOutlinedIcon style={{cursor:"pointer"}} />
                <GridViewIcon style={{cursor:"pointer"}} />
                <div className="search">
                    <SearchOutlinedIcon onClick={onCliFocus} className="icon" style={{cursor:"pointer"}} />
                    <input type="text" name="serach" id="searchBar" placeholder="search..."/>
                </div>
            </div>
            <div className="nav-right">
                <PersonOutlineOutlinedIcon style={{cursor:"pointer"}} />
                <EmailOutlinedIcon style={{cursor:"pointer"}} />
                <NotificationsNoneOutlinedIcon style={{cursor:"pointer"}} />
                <div style={{cursor:"pointer"}} ><Avatar  /> Samuel Raj</div>
            </div>
        </div>
    );
}

export default NavBar;
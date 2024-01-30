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
    return (
        <div className="nav">
            <div className="nav-left">
                <div className="appName">LevelUp</div>
                <HomeOutlinedIcon />
                <DarkModeOutlinedIcon />
                <GridViewIcon />
                <div className="search">
                    <SearchOutlinedIcon className="icon" />
                    <input type="text" name="serach" id="searchBar" placeholder="search..."/>
                </div>
            </div>
            <div className="nav-right">
                <PersonOutlineOutlinedIcon />
                <EmailOutlinedIcon />
                <NotificationsNoneOutlinedIcon />
                <div><Avatar /> Samuel Raj</div>
            </div>
        </div>
    );
}

export default NavBar;
import React,{useState,useContext} from 'react';
import {myContext} from "../../App";
import "./Posts.css"
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Post from "../../assets/images/sto1.jpg";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import ShareIcon from '@mui/icons-material/Share';
import Comments from '../Comments/Comments';

export default function Posts() {
    const [comments,upComments] = useState(false);
    const {mode} = useContext(myContext);

    return (
        <div className='posts'>
            <div className="post" style={{backgroundColor: !mode && "#222",color: !mode && "white"}}>
                <div className="headerPost">
                    <Link to="/profile/jhonjoe" style={{ textDecoration: "none", color: !mode ? "white" :"black", outline: "none" }}>
                        <div className="leftP">
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ textDecoration: "none" }} sx={{ width: 30, height: 30 }} />
                            <div className="namePost">
                                <div className="name">Jhon joe</div>
                                <div className="timeline">a few secounds ago</div>
                            </div>
                        </div>
                    </Link>

                    <div className="rightP">
                        <MoreHorizIcon style={{ fontSize: "22px", cursor: "pointer" }} />
                    </div>
                </div>
                <div className="postContent">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, nisi?</div>
                <img src={Post} alt="" className="possImg" />
                <div className="footerPost">
                    <div><FavoriteBorderIcon style={{fontSize:"18px"}} /> Likes</div>
                    <div onClick={()=>{upComments(!comments)}}><SmsOutlinedIcon style={{fontSize:"18px"}} /> Comments</div>
                    <div><ShareIcon style={{fontSize:"18px"}} /> Share</div>
                </div>
                {comments && <Comments />}
            </div>
        </div>
    );
}

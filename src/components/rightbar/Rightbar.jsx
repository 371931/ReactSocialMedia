import React from "react";
import "./Rightbar.css";
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';

function Rightbar() {
    return (
        <div className="rightbar">
            <div className="right1">
                <p>Suggestions For You</p>
                <div><div className="div1"><Avatar /> <p>samuel</p></div>
                    <div className="div2"><button>follow</button><button>dismiss</button></div>
                </div>
                <div><div className="div1"><Avatar /> <p>samuel</p></div>
                    <div className="div2"><button>follow</button><button>dismiss</button></div>
                </div>
            </div>

            <div className="right2">
                <p>Latest Activities</p>
                <div><div className="div1"><Avatar /> <p>samuel</p><span>changed their cover photo</span></div>
                    <div className="div2">1 min ago</div>
                </div>

                <div><div className="div1"><Avatar /> <p>samuel</p><span>liked a post</span></div>
                    <div className="div2">1 min ago</div>
                </div>

                <div><div className="div1"><Avatar /> <p>samuel</p><span>liked a comment</span></div>
                    <div className="div2">1 min ago</div>
                </div>

                <div><div className="div1"><Avatar /> <p>samuel</p><span>posted</span></div>
                    <div className="div2">1 min ago</div>
                </div>    
            </div>

            <div className="right3">
                <p>Online Friends</p>
                <div><div className="div1"><Badge color="success" overlap="circular" badgeContent=" " variant="dot"><Avatar /></Badge> <p>samuel</p></div>
                </div>
                <div><div className="div1"><Badge color="success" overlap="circular" badgeContent=" " variant="dot"><Avatar /></Badge> <p>samuel</p></div>
                </div>
                <div><div className="div1"><Badge color="success" overlap="circular" badgeContent=" " variant="dot"><Avatar /></Badge> <p>samuel</p></div>
                </div>
                <div><div className="div1"><Badge color="success" overlap="circular" badgeContent=" " variant="dot"><Avatar /></Badge> <p>samuel</p></div>
                </div>
                <div><div className="div1"><Badge color="success" overlap="circular" badgeContent=" " variant="dot"><Avatar /></Badge> <p>samuel</p></div>
                </div>
            </div>

        </div>
    );
}

export default Rightbar;
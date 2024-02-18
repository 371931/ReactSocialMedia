import React from "react";
import "./Stories.css";
import AddIcon from '@mui/icons-material/Add';
import Stor1 from "../../assets/images/sto1.jpg";
import Stor2 from "../../assets/images/sto2.jpg";

export default function Stories() {
    return (
        <div className="stories">
            <div className="storieMy">
                <img src={Stor1} alt="" />
                <div className="action"><AddIcon style={{fontSize:"16px",cursor:"pointer"}} /> </div>
                <div>name</div>
            </div>
            <div className="otherSto">
                <img src={Stor2} alt="" />
                <div>name</div>
            </div>
            <div className="otherSto">
                <img src={Stor2} alt="" />
                <div>name</div>
            </div>
            <div className="otherSto">
                <img src={Stor2} alt="" />
                <div>name</div>
            </div>
            <div className="otherSto">
                <img src={Stor2} alt="" />
                <div>name</div>
            </div>
            <div className="otherSto">
                <img src={Stor2} alt="" />
                <div>name</div>
            </div>
            <div className="otherSto">
                <img src={Stor2} alt="" />
                <div>name</div>
            </div>
        </div>
    );
}
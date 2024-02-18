import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {

    const [imgsrc, upSrc] = useState("./assets/images/password-hide.svg");
    const [passCheck, upCheck] = useState(true);
    const [inputType, upInput] = useState("password");

    const [imgsrc2, upSrc2] = useState("./assets/images/password-hide.svg");
    const [passCheck2, upCheck2] = useState(true);
    const [inputType2, upInput2] = useState("password");

    function passEyeOncli() {
        upCheck(passCheck ? false : true);
        upSrc(passCheck ? "./assets/images/password-show.svg" : "./assets/images/password-hide.svg");
        upInput(passCheck ? "text" : "password");
    }

    function passEyeOncli2() {
        upSrc2(passCheck2 ? "./assets/images/password-show.svg" : "./assets/images/password-hide.svg");
        upCheck2(passCheck2 ? false : true);
        upInput2(passCheck2 ? "text" : "password");
    }

    return (
        <div className="container">
            <div className="card">
                <div className="left">
                    <h1>Register</h1>
                    <form action="" method="post">
                        <input type="text" name="username" placeholder="Username" autoFocus />
                        <div>
                            <input type={inputType} name="password" placeholder="Password" />
                            <img src={imgsrc} onClick={passEyeOncli} />
                        </div>
                        <div>
                            <input type={inputType2} name="Comfirmpassword" placeholder="Confirm Password" />
                            <img src={imgsrc2} onClick={passEyeOncli2} />
                        </div>
                        <button>Register</button>
                        <Link to="/login" className="but1">
                            <button className="button">Login</button>
                        </Link>
                    </form>
                </div>
                <div className="right">
                    <h1>Hello world!</h1>
                    <p>Reconnect and Ignite: Every Login Sparks New Social Connections, Unveiling Your Ever-Growing Hub!</p>
                    <Link to="/login" className="but">
                        <button className="button">Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
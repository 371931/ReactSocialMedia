import React,{useState} from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login(){

    const [imgsrc,upSrc] = useState("./assets/images/password-hide.svg");
    const [passCheck,upCheck] = useState(true);
    const [inputType,upInput] = useState("password");

    function passEyeOncli(){
        upSrc(passCheck ? "./assets/images/password-show.svg" : "./assets/images/password-hide.svg");
        upCheck(passCheck ? false : true);
        upInput(passCheck ? "text" : "password");
    }

    return(
        <div className="login-container">
        <div className="login-card">
            <div className="login-left">
                <h1>Hello world!</h1>
                <p>Join our vibrant community! Create your account now and connect with friends, share your stories, and explore endless possibilities. Your social journey begins with just a few clicks – Register and join the excitement!</p>
                <Link className="but" to="/register">
                <button className="button" >Register</button>
                </Link>
            </div>
            <div className="login-right">
                <h1>Login</h1>
                <form action="" method="post">
                    <input type="text" placeholder="Username" autoFocus/>
                    <div>
                    <input type={inputType} placeholder="password"/>
                    <img src={imgsrc}  onClick={passEyeOncli}/>
                    </div>
                    <button>Login</button>
                    <Link className="but1" to="/register">
                <button className="button" >Register</button>
                </Link>
                </form>
            </div>
        </div>
        </div>
    );
}

export default Login;
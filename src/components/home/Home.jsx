import React,{useContext} from "react";
import "./Home.css";
import { myContext } from "../../App";

function Home(){

    const {mode} = useContext(myContext)

    return(
        <div className="home" style={{backgroundColor: !mode && "#333",color: !mode && "white"}} >
            Home<br />
        </div>
    );
}

export default Home;
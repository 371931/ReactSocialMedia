import React,{useContext} from "react";
import "./Home.css";
import { myContext } from "../../App";
import Stories from "../storie/Stories";
import Posts from "../Posts/Posts";

function Home(){

    const {mode} = useContext(myContext)

    return(
        <div className="home" style={{backgroundColor: !mode && "#333",color: !mode && "white"}} >
            <Stories />
            <div className="homePosts">
            <Posts />
            <Posts />
            <Posts />
            </div>
        </div>
    );
}

export default Home;
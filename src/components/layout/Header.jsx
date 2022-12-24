import React from "react";
import Button from "../Button";
import classes from "./Header.module.css"
import Links from "../Link"
import { Link, Route } from "react-router-dom";


const Header = (props) => {
    return (
        <div className={classes.maincontentt}>
           <h1 className={classes.portfolio}><span>PORT</span><span>FOLIO</span></h1>
           <img src="../../images/emoji.png"  className={classes.mypic} alt="mypic"></img>
           <div className={classes.buttoncontain}>
                        <Link to="/home"><Button name= "home"/></Link>
                        <Link to="/skills"><Button name = "skills"/></Link>
                        <Link to="/projects"><Button name = "projects"/></Link>
                        <Button name = "contact-me" onClick={props.onClick}></Button>
                        <Button name = "resume/cv" onClick = "https://drive.google.com/file/d/1HZUcUKfjOvVWSueBeq5UvYv3Xhw7ctUl/view?usp=share_link"/>
           </div>
           <Links src = "https://www.linkedin.com/in/divyansh-verma-4171131a3"
           imglink = "../../images/linkedin.png"
           alt = "LinkedIn"/>
           <Links src = "https://github.com/dv0308"
           imglink = "../../images/github2.png"
           alt = "Github"/>
        </div>
    )
}

export default Header
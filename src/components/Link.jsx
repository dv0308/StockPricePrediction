import React from "react";
import classes from "./Link.module.css"


const Link = (props) => {
    return (
        <div >
            <a href={props.src}><img className={classes.myicons}src={props.imglink} alt={props.alt}></img></a>
        </div>
    )
}

export default Link
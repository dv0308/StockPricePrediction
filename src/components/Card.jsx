import React from "react";
import classes from "./Card.module.css"

const Card = (props) => {
    var url = "../../images/"+props.imagesrc+".png"
    return <div className={classes.card}>
            <div className={classes.imageholder}>
                <img className={classes.skillimages} src = {url} alt = "htmlimage"></img>
            </div>
            <p>{props.title}</p>
        </div>
}

export default Card
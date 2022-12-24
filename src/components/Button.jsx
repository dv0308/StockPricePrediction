import React from "react";
import classes from "./Button.module.css"

const Button = (props) => {

    if(props.name === 'resume/cv'){

        return <a href={props.onClick} className = {classes.resumecv}>{props.name}</a>
    }
    return <button onClick={props.onClick} className={classes.actualbutton}>{props.name}</button>
}

export default Button
import React from "react";
import Card from "../Card";
import classes from "./Skills.module.css"

const Skills = () => {
        return <div className={classes.wholebg}><div className={classes.outerbox}>
                <div className={classes.box}>
                <Card imagesrc = "htmlimage" title = "HTML"/>
                <Card imagesrc = "cssimage" title = "CSS"/>
                <Card imagesrc = "jsimage" title = "JAVASCRIPT"/>
                <Card imagesrc = "reactimage" title = "REACT"/></div>
                <div  className={classes.box}>
                <Card imagesrc = "sqlimage" title = "SQL"/>
                <Card imagesrc = "mongoimage" title = "MONGODB"/>
                <Card imagesrc = "cimage" title = "C++"/> 
                <Card imagesrc = "nodejsimage" title = "NODE.JS"/> 
                 </div>
        </div>
        </div>
}

export default Skills
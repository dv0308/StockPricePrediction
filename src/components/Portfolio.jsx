import React, { useState } from "react";
import classes from "./Portfolio.module.css"
import LoadingIcon from "./LoadingIcon";

const Portfolio = () => {

    var [getFact, setFact] = useState("");
    var [getAuthor, setAuthor] = useState("");
    var [isLoading, setLoading] = useState(false);
    var [firstState, setFirstState] = useState(true);
    const onButtonClickHandler = async () =>{
        setLoading(isLoading = false);
        setFirstState(firstState = false)
        console.log("runnin")
        const res = await fetch("https://api.api-ninjas.com/v1/quotes?category=inspirational",{
          method : "GET",
          "content-type": "application/json",
          headers : {
              'X-Api-Key': 'HZPDAN72JQ1SYen7WIg9rg==0oQbWfOLOLzGY89U',
          }
      }).then(response => response.json()).then((data) => {
        setFact(getFact = data[0].quote);
        setAuthor(getAuthor = "--"+data[0].author)
        setLoading(isLoading = true);
      })}
    return (
        <React.Fragment>
        <div className={classes.aboutme}>
            <div className={classes.info}>
                <span>Hi, I'm <span className={classes.D}>D</span>ivyansh.<br></br></span>
                <span>I love solving coding questions.<br></br></span>
                <span>and sometimes web development too.</span>
            </div>
            <img src = "../../images/hackerimage.png" alt = "hackerimage" className={classes.hackerimage}></img>
        </div>
        <div className={classes.bottom}>
            <button className={classes.factbutton} onClick={onButtonClickHandler}>QUOTE OF THE DAY</button>
            <div>
                {!firstState && !isLoading && <LoadingIcon/>}
                {isLoading && <p>{getFact}</p>}
                {isLoading && <h4>{getAuthor}</h4>}
            </div>
        </div>
        </React.Fragment>
    )
}
export default Portfolio
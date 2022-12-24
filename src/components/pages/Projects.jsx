import React from "react";
import classes from "./Projects.module.css"

const Projects = () => {
        return <div className={classes.projectbox}>
                <div className={classes.project}>
                <h1>Expense Tracker</h1>
                <h3>Expense tracker app web frontend built with React. Features like 
                add new expense, see our expenses of all over years, animated statistics of expenses on each, 
                month record of all expenses</h3>
                </div>
                <div className={classes.project}>
                <h1>Blog Site </h1>
                <h3>This project allows user to create, delete blogs. Users can edit blogs or create
                        new blogs. It is created using HTML, CSS, EJS, MongoDB, Mongoose</h3>
                </div>
                <div className={classes.project}>
                <h1>Hunger Fix : A Food Ordering WebSite</h1>
                <h3>This project allows Users to register to the website and browse from the catalog of food and add that item
in various quantities to the cart and then checkout. It is Created using HTML, CSS, React.js</h3>
                </div>
                
        </div>
}

export default Projects
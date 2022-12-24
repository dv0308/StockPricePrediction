import React  from "react";
import Modal from "./Modal/modal";
import classes from "./ContactMe.module.css"
import Button from "./Button";

const ContactMe = (props) => {
    return <Modal onClick = {props.onClick}>
        <div className = {classes.modaldesc}>
            <h1>Email</h1>
            <h3>recruit.divyansh2023@gmail.com</h3>
        </div>
        <div className = {classes.modaldesc}>
            <h1>Phone Number</h1>
            <h3>7078562396</h3>
        </div>
            <button className = {classes.modalbtn} onClick={props.onClick}>Close</button>
    </Modal>
}

export default ContactMe
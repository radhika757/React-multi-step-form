import React from "react";

const PersonalInfo = () =>{
    return(
        <div>
            <h2>Fill in your personal information</h2>

            <label>Name</label>
            <input type="text" placeholder="Enter your name"/>
            <label>Mobile number</label>
            <input type="number" placeholder="Enter your Number"/>
            <label>Address</label>
            <input type="email" placeholder="Enter your Email"/>
        </div>
    )
}

export default PersonalInfo;
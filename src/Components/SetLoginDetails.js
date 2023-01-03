import React from "react";

const SetLoginDetails = () =>{
    return(
        <div>
            <h2>Set login details</h2>
            <label>User name</label>
            <input type="text" placeholder="Enter desired username"/>

            <label> Password</label>
            <input type="password" placeholder="Enter password"/>
        </div>
    )
}

export default SetLoginDetails;
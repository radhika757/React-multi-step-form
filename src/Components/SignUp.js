import React from "react";

const SignUp = () =>{
    return(
        <div className="signup-form">
            <h2>Welcome,Please Sign up to continue!</h2>
            <label>Email</label>
            <input type="email" placeholder="Enter your Email"/>
           
            <label> Password</label>
            <input type="password" placeholder="Enter password"/>
        </div>
    )
}

export default SignUp;
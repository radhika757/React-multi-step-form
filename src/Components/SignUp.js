import React from "react";
import styled from "styled-components";

// styling form

const SignUp = ({formData, setFormData}) => {
  // console.log(formData)
  return (
    <div className="sign-up-container">
      {/* <h2>Welcome,Please Sign up to continue!</h2> */}
    
      <label>Email</label> 
       {/* Altering single field  */}
      <input type="text" placeholder="email" 
       value={formData.email}
       onChange={
        (event) => 
        setFormData({...formData, email: event.target.value })
        } 
        />  
     
      <label> Nationality</label>
      <input type="text" placeholder="Country" value={formData.nationality} onChange={

        (event)=>{
          setFormData({...formData, nationality: event.target.value})
        }
      }/>
    </div>
  );
};

export default SignUp;

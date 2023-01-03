import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import SignUp from "./SignUp";
import SetLoginDetails from "./SetLoginDetails";


function Form() {
  const [page, setPage] = useState(0); // (0) First page

// creating an array for titles 
const pageTitles = ["SignUp", "Personal Information", "Login Details"];  //Displaying the titles based on what page we are on


//  Function to display the content on the basis of page we are on

const PageDisplay = () =>{
  if(page == 0){
    return <SignUp/>
  } else if(page == 1){
    return <PersonalInfo/>
  } else{
    return <SetLoginDetails/>
  }
}
  return (
    <div className="forms">
      <div className="progress-bar"></div>
      <div className="form-container"></div>
      <div className="header">
        {/* <h1> {pageTitles[page]} </h1> */}
        {PageDisplay()}
      </div>
      <div className="body"></div>
      <div className="footer">
        <button 
        disabled={page == 0}
        onClick={()=>{
          setPage((currPage) => currPage - 1);
        }}
        >Prev</button>
        {/* With a click we want to change the state */}
        <button disabled={page == pageTitles.length - 1} 
        onClick={()=>{
            setPage((currPage) => currPage + 1); //
            }}>
                Next
        </button> 
      </div>
    </div>
  );
}

export default Form;

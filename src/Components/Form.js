import React, { useState } from "react";

function Form() {
  const [page, setPage] = useState(0); // (0) First page

// creating an array for titles 
const pageTitles = ["SignUp", "Personal Information", "Login Details"];  //Displaying the titles based on what page we are on

  return (
    <div className="forms">
      <div className="progress-bar"></div>
      <div className="form-container"></div>
      <div className="header">
        <h1> {pageTitles[page]} </h1>
      </div>
      <div className="body"></div>
      <div className="footer">
        <button>Prev</button>
        {/* With a click we want to change the state */}
        <button onClick={()=>{
            setPage((currPage) => currPage + 1); //
            }}>
                Next
        </button> 
      </div>
    </div>
  );
}

export default Form;

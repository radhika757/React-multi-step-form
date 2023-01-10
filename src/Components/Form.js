import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import SignUp from "./SignUp";
import SetLoginDetails from "./SetLoginDetails";
import styled from "styled-components";

function Form() {
  const [page, setPage] = useState(0); // (0) First page

  const [formData, setFormData] = useState({
    email: "",
    nationality: "",
    name: "",
    number: "",
    address: "",
    username: "",
    password: "",
  });

  // creating an array for titles
  const pageTitles = ["SignUp", "Personal Information", "Login Details"]; //Displaying the titles based on what page we are on

  //  Function to display the content on the basis of page we are on

  const PageDisplay = () => {
    if (page == 0) {
      return <SignUp formData={formData} setFormData={setFormData} />;
    } else if (page == 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <SetLoginDetails loginData={formData} setLoginData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{ width: page == 0 ? "33.33%" : page == 1 ? "66%" : "100%" }}
        ></div>
      </div>

      <div className="form-container">
        <div className="header">
          <h1> {pageTitles[page]} </h1>
        </div>
        <div className="body"> {PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          {/* With a click we want to change the state */}
          <button
            disabled={page == pageTitles.length - 1}
            onClick={() => {
              setPage((currPage) => currPage + 1); //
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;

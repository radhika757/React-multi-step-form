import React from "react";

const SetLoginDetails = ({ loginData, setLoginData }) => {
  return (
    <div className="other-info-container">
      {/* <h2>Set login details</h2> */}
      <label>User name</label>
      <input
        type="text"
        placeholder="Enter desired username"
        value={loginData.username}
        onChange={(event) => {
          setLoginData({ ...loginData, username: event.target.value });
        }}
      />

      <label> Password</label>
      <input
        type="password"
        placeholder="Enter password"
        value={loginData.password}
        onChange={(pass) => {
          setLoginData({ ...loginData, password: pass.target.value });
        }}
      />
    </div>
  );
};

export default SetLoginDetails;

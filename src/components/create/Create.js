import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Create = () => {
  let navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // console.log(firstName + lastName);

  const sendDataToAPI = (e) => {
    e.preventDefault();
    axios
      .post(`https://628b0943667aea3a3e2603a0.mockapi.io/Crud`, {
        firstName,
        lastName
      })
      .then(() => {
        navigate("/read");
      });
    setFirstName("");
    setLastName("");
  };
  return (
    <div>
      <h1>Create Operation</h1>
      <form className="ui form">
        <div className="field">
          <label>First Name</label>
          <input
            type="text"
            name="fname"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
        </div>
        <div className="field">
          <label>Last Name</label>
          <input
            type="text"
            name="lname"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
        </div>

        <button className="ui button" type="submit" onClick={sendDataToAPI}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;

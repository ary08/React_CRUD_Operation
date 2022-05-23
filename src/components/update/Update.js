import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Update = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ID, setID] = useState(null);
  // console.log(firstName + lastName);

  const sendDataToAPI = (e) => {
    e.preventDefault();
    axios
      .put(`https://628b0943667aea3a3e2603a0.mockapi.io/Crud/${ID}`, {
        firstName,
        lastName
      })
      .then(() => {
        navigate("/read");
      });
    // setFirstName("");
    // setLastName("");
  };

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
  }, []);
  return (
    <div>
      <h1>Update Operation</h1>
      <form className="ui form">
        <div className="field">
          <label>First Name</label>
          <input
            type="text"
            name="fname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
        </div>
        <div className="field">
          <label>Last Name</label>
          <input
            type="text"
            name="lname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
        </div>

        <button className="ui button" type="submit" onClick={sendDataToAPI}>
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;

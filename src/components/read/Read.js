import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Read = () => {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://628b0943667aea3a3e2603a0.mockapi.io/Crud`)
      .then((getData) => {
        setApiData(getData.data);
      });
  });

  const setID = (id, firstName, lastName) => {
    console.log(id);
    localStorage.setItem("ID", id);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("firstName", firstName);
  };

  const getData = () => {
    axios
      .get(`https://628b0943667aea3a3e2603a0.mockapi.io/Crud`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://628b0943667aea3a3e2603a0.mockapi.io/Crud/${id}`)
      .then(() => {
        getData();
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h1>Read Operations</h1>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {apiData &&
            apiData.map((item, index) => (
              <tr key={index}>
                <td data-label="id">{item.id}</td>
                <td data-label="fName">{item.firstName}</td>
                <td data-label="lName">{item.lastName}</td>
                <td data-label="Update">
                  <Link to="/update">
                    <button
                      className="ui button"
                      type="submit"
                      color="green"
                      onClick={() => setID(item.id)}
                    >
                      Update
                    </button>
                  </Link>
                </td>
                <td data-label="Delete">
                  <Link to="/delete">
                    <button
                      className="ui button"
                      type="submit"
                      onClick={() => onDelete(item.id)}
                    >
                      Delete
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Read;

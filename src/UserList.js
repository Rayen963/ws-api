// src/UserList.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h1>User List</h1>
      <ul style={styles.list}>
        {listOfUser.map((user) => (
          <li key={user.id} style={styles.listItem}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    list: {
      listStyleType: 'none',
      padding: 0,
    },
    listItem: {
      padding: '10px',
      borderBottom: '1px solid #ccc',
    },
  };
  

export default UserList;



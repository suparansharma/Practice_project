import React from "react";

const AddUser = () => {
  const handleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;

    const user = { name, email };

    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert('users added successfully');
        event.target.reset();
      });
  };
  return (
    <div>
      <h2>please add a new user</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" placeholder="Name" required />
        <br />
        <input type="email" name="email" id="" placeholder="Email" required />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default AddUser;

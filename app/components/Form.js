import React, { useState, useEffect } from "react";

import "../sass/Form.scss";
export default function Form(props) {
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    setData({
      title: props.dataUpdate.title,
      description: props.dataUpdate.description,
    });
  }, [props.dataUpdate]);
  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    if (props.dataUpdate.title !== "") {
      fetch("http://localhost:5000/api/tasks/" + props.dataUpdate._id, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => console.log(res))
        .catch((err) => console.error(err.message));
      props.resetDataUpdate();
    } else if (data.title !== "" && data.description !== "") {
      fetch("http://localhost:5000/api/tasks", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => console.log(res))
        .catch((err) => console.error(err.message));
    }
    e.preventDefault();
    setData({ title: "", description: "" });
  }

  return (
    <div className="form-container">
      <h2>Add new task</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          value={data.title}
          name="title"
          onChange={handleChange}
          type="text"
          placeholder="Title..."
        />
        <textarea
          value={data.description}
          name="description"
          onChange={handleChange}
          cols="30"
          rows="10"
          placeholder="Description..."
        ></textarea>
        <button onClick={props.handleMessageSubmit}>Add</button>
      </form>
    </div>
  );
}

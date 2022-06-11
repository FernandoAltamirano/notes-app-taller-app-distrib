import React, { useState, useEffect } from "react";
import {sendTask, updateTask} from "../utils/HandleRequest";
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
  async function handleSubmit(e) {
    e.preventDefault()
    if (props.dataUpdate.title !== "") {
      await updateTask(props.dataUpdate._id,data)
      props.resetDataUpdate();
    } else if (data.title !== "" && data.description !== "") {
      await sendTask(data)
    }
    setData({ title: "", description: "" });
    props.fetchData()
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

import React from "react";
import "../sass/Card.scss";
import edit from "../images/edit.svg";
import trash from "../images/delete.svg";

export default function Card(props) {
  function deleteTask() {
    fetch("http://localhost:5000/api/tasks/" + props.item._id, {
      method: "DELETE",
    }).then((res) => console.log(res));
  }

  function fetchUpdateData() {
    props.updateData(props.item._id);
  }
  return (
    <div className="card">
      <p className="card-title">{props.item.title}</p>

      <div className="btn-container">
        <button className=" btn btn-edit" onClick={fetchUpdateData}>
          <img src={edit} alt="" />
        </button>
        <button className=" btn btn-delete" onClick={deleteTask}>
          <img src={trash} alt="" />
        </button>
      </div>
    </div>
  );
}

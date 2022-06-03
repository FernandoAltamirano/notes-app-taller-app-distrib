import React, { Fragment, useEffect, useState } from "react";
import "../sass/App.scss";
import Header from "./Header";
import Form from "./Form";
import Switch from "./Switch";
import ListTasks from "./ListTasks";
import SuccessMessage from "./SuccessMessage";
import "../sass/header-switch.scss";
export default function App() {
  const [data, setData] = useState([]);
  const [dataUpdate, setDataUpdate] = useState({ title: "", description: "" });
  const [displaySuccessMessage, setDisplaySuccessMessage] = useState("");
  function fetchData() {
    fetch("http://localhost:5000/api/tasks")
      .then((res) => res.json())
      .then((dataJSON) => setData(dataJSON))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    fetchData();
  }, []);
  function resetDataUpdate() {
    setDataUpdate({ title: "", description: "" });
  }
  function updateData(response) {
    console.log(response);
    fetch("http://localhost:5000/api/tasks/" + response)
      .then((res) => res.json())
      .then((dataJSON) => {
        setDataUpdate(dataJSON);
      })
      .catch((error) => console.log(error));
  }
  function handleMessageSubmit() {
    // fetchData();
    setDisplaySuccessMessage("hidden");
    setTimeout(() => {
      setDisplaySuccessMessage("");
    }, 1500);
  }
  return (
    <Fragment>
      <div className="header-switch">
        <Header />
        <Switch />
      </div>
      <div className="container">
        <div className="container-left">
          <Form
            handleMessageSubmit={handleMessageSubmit}
            dataUpdate={dataUpdate}
            resetDataUpdate={resetDataUpdate}
          />
          <SuccessMessage displaySuccessMessage={displaySuccessMessage} />
        </div>
        <div className="container-right">
          <ListTasks data={data} updateData={updateData} />
        </div>
      </div>
    </Fragment>
  );
}

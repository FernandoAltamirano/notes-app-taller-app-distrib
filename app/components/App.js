import React, { Fragment, useEffect, useState } from "react";
import "../sass/App.scss";
import Header from "./Header";
import Form from "./Form";
import Switch from "./Switch";
import ListTasks from "./ListTasks";
import SuccessMessage from "./SuccessMessage";
import "../sass/header-switch.scss";
import { getTasks, getTasksById } from "../utils/HandleRequest";
export default function App() {
  const [data, setData] = useState([]);
  const [dataUpdate, setDataUpdate] = useState({ title: "", description: "" });
  const [displaySuccessMessage, setDisplaySuccessMessage] = useState("");
  
  async function fetchData() {
    const tasks = await getTasks()
    setData(tasks)
  }

  useEffect(() => {
    fetchData();
  }, []);
  function resetDataUpdate() {
    setDataUpdate({ title: "", description: "" });
  }
  async function updateData(id) {
    const tasks = await getTasksById(id)
    setDataUpdate(tasks);
  }
  function handleMessageSubmit() {
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
            fetchData={fetchData}
            handleMessageSubmit={handleMessageSubmit}
            dataUpdate={dataUpdate}
            resetDataUpdate={resetDataUpdate}
          />
          <SuccessMessage displaySuccessMessage={displaySuccessMessage} />
        </div>
        <div className="container-right">
          <ListTasks fetchData={fetchData} data={data}updateData={updateData} />
        </div>
      </div>
    </Fragment>
  );
}

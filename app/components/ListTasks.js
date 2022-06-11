import React from "react";
import Card from "./Card";
import Empty from "./Empty";
import "../sass/ListTasks.scss";
export default function ListTasks({ data, updateData,fetchData }) {
  return (
    <div>
      <h2 className="titleContainerCards">TASKS</h2>
      <div className="listTasks">
        {data.length > 0 ? (
          data
            .slice(0)
            .reverse()
            .map((item) => {
              return (
                <Card key={item._id} item={item} updateData={updateData} fetchData={fetchData}/>
              );
            })
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
}

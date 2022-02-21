import React from "react";
import { useHistory } from "react-router-dom";
import "./Topic.css";

const Topic = (props) => {
  const { Id, name, img } = props.topic;
  const history = useHistory();
  const handle = () => {
    history.push(`/topic/${Id}`);
  };
  return (
    <div className="image-style">
      <img src={img} alt="" />
      <h1>Name : {name}</h1>
      <button onClick={handle}>Visit Me</button>
    </div>
  );
};

export default Topic;

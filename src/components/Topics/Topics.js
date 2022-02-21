import React, { useEffect, useState } from "react";
import Topic from "../Topic/Topic";
import "./Topics.css";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    fetch("fake.json")
      .then((res) => res.json())
      .then((data) => setTopics(data));
  }, []);
  return (
    <div>
      <h1>Total Topics : {topics.length}</h1>
      <div className="topics-container">
        {topics.map((topic) => (
          <Topic topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Topics;

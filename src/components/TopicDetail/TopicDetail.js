import React, { useEffect, useState } from "react";
import "./TopicDetail.css";
import { useParams } from "react-router-dom/cjs/react-router-dom";

const TopicDetail = () => {
  const { topicId } = useParams();
  console.log(topicId);
  const [topic, setTopic] = useState({});
  useEffect(() => {
    fetch("/fake.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newTopic = data.find((Topic) => Topic.Id == topicId);
        setTopic(newTopic);
      });
  }, []);

  return (
    <div className="detail">
      <h1>{topic.name} Topic's Detail</h1>
      <h2>Course Name : {topic.name}</h2>
      <h2>Price : {topic.package}</h2>
      <h2>Time : {topic.time}</h2>
      <h2>Country : {topic.country}</h2>
      <p>Description : {topic.description}</p>
    </div>
  );
};

export default TopicDetail;

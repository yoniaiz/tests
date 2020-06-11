import React from "react";
import { useSelector } from "react-redux";

export default () => {
  const { comments } = useSelector((state) => state);

  const renderComments = () => {
    return comments.map((comment, index) => <li key={index}>{comment}</li>);
  };

  return (
    <div>
      <h4>Comment list</h4>
      <ul>{renderComments()}</ul>
    </div>
  );
};

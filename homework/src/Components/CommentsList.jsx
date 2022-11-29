import { Component } from "react";
import { ListGroup } from "react-bootstrap";

const CommentsList = (props) => {
  return (
    //replace fields with the object receive as a prop from 'CommentArea.jsx'
    <div className="all-comments">
      <ListGroup>
        <ListGroup.Item>{props.comments.comment}</ListGroup.Item>
        <ListGroup.Item>Rate: {props.comments.rate} / 5</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default CommentsList;

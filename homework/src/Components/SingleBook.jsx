import { Component } from "react";
import { Card } from "react-bootstrap";
import "../Components/SingleBook.css";
import CommentArea from "../Components/CommentArea.jsx";
import { useState } from "react";

const SingleBook = (props) => {
  // state = {
  //   clicked: false,
  // };

  const [clicked, setClicked] = useState(false);

  const changeStatus = () => {
    if (clicked === false) {
      setClicked(true);
      // console.log(this.props.books.asin);
    } else {
      setClicked(false);
    }
  };

  // console.log(this.props);
  return (
    <>
      <Card style={{ border: clicked ? "4px solid lime" : "" }}>
        <Card.Img
          variant="top"
          src={props.book.img}
          onClick={() => {
            props.getBookID(props.book.asin);
            changeStatus();
          }}
        />
        <Card.Body>
          <Card.Title>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;

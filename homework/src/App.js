import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import history from "../src/books/history.json";
import { Container, Row, Col } from "react-bootstrap";
import WarningSign from "./Components/WarningSign.jsx";
import MyBadge from "./Components/MyBadge.jsx";
import BookList from "./Components/BookList.jsx";
import CommentArea from "./Components/CommentArea";
import { Component, useState } from "react";

const App = () => {
  //   state = {
  //     bookID: "",
  //   };

  const [bookID, setBookID] = useState("");

  const getBookID = (thevalue) => {
    // this.setState({ bookID: thevalue });
    setBookID(thevalue);
    console.log(bookID);
  };

  return (
    <div className="App">
      <WarningSign message="Warning, Something Went Wrong!!!" />
      <MyBadge color="success" text="My Added Text" />
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <div className="books">
              <BookList getBookID={getBookID} />
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="comments">
              <CommentArea bookID={bookID} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;

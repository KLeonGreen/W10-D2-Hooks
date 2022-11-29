import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "../Components/SingleBook";
import "../Components/SingleBook.css";
import history from "../books/history.json";
import { useState } from "react";

const BookList = (props) => {
  // state = {
  //   userInput: "",
  // };

  const [userinput, setUserinput] = useState("");

  const filterBooks = (e) => {
    // this.setState({ userInput: e.target.value });
    setUserinput(e.target.value);
  };

  return (
    <>
      <Container>
        <input className="search-bar" type="text" placeholder="Search book here..." onKeyUp={filterBooks} />
        <Row>
          {history
            .filter((book) => book.title.includes(userinput))
            .map((book) => {
              return (
                <Col xs={12} sm={6} md={4} lg={3} xl={3} key={book.asin}>
                  <SingleBook book={book} getBookID={props.getBookID} />;
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default BookList;

import { Component, useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const AddComment = (props) => {
  // state = {
  //   users: {
  //     comment: "",
  //     rate: "",
  //     elementId: "",
  //   },
  // };

  const [users, setUsers] = useState({
    comment: "",
    rate: "",
    elementId: "",
  });

  const sendCommentHandler = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify(users),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZlMTgyY2Y4MGYxYTAwMTVkOGEwMmMiLCJpYXQiOjE2NjkyOTY0OTcsImV4cCI6MTY3MDUwNjA5N30.sMiBu2CBbQ4FbAQFIAiKtIgcpySWP-Yt65fPmgJS4vI",
      },
    };

    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments", options);

      if (response.ok) {
        alert("Comment Sent successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeHandler = (value, name) => {
    // this.setState({
    //   users: {
    //     ...this.state.users,
    //     [name]: value,
    //   },
    // });

    setUsers({
      ...users,
      [name]: value,
    });
  };

  // componentDidMount() {
  //   this.setState({
  //     users: {
  //       ...this.state.users,
  //       elementId: this.props.bookID,
  //     },
  //   });
  // }
  useEffect(() => {
    setUsers({
      ...users,
      elementId: props.bookID,
    });
  }, [props.bookID]);

  // componentDidUpdate(prevProps) {
  //   if (prevProps.bookID !== this.props.bookID) {
  //     this.setState({
  //       users: {
  //         ...this.state.users,
  //         elementId: this.props.bookID,
  //       },
  //     });
  //   }
  // }

  return (
    <div>
      <textarea className="add-comment" type="text" placeholder="Add Comment" value={users.comment} onChange={(e) => onChangeHandler(e.target.value, "comment")} />
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Rate this book</Form.Label>
        <Form.Control as="select" value={users.rate} onChange={(e) => onChangeHandler(e.target.value, "rate")}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
      <button className="btn btn-secondary" onClick={sendCommentHandler}>
        Add Comment
      </button>
    </div>
  );
};

export default AddComment;

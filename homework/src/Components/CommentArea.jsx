import { Component, useEffect } from "react";
import CommentList from "../Components/CommentsList.jsx";
import AddComment from "../Components/AddComment.jsx";
import { Spinner } from "react-bootstrap";
import { useState } from "react";

const CommentArea = (props) => {
  // state = {
  //   comments: [],
  //   isLoading: false,
  // };

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getComments = async () => {
    const options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZlMTgyY2Y4MGYxYTAwMTVkOGEwMmMiLCJpYXQiOjE2NjkyOTY0OTcsImV4cCI6MTY3MDUwNjA5N30.sMiBu2CBbQ4FbAQFIAiKtIgcpySWP-Yt65fPmgJS4vI",
      },
    };

    let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.bookID, options);

    if (response.ok) {
      const data = await response.json();
      setComments(data);
      setIsLoading(false);
      console.log(data);
      console.log(props.bookID);
    }
  };

  // componentDidMount() {
  //   getComments();
  // }

  useEffect(() => {
    getComments();
  }, []);

  useEffect(() => {
    getComments();
  }, [props.bookID]);

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevProps);
  //   if (prevProps.bookID !== this.props.bookID) {
  //     this.getBooks();
  //   }
  // }

  return (
    <div style={{ color: "black" }}>
      <div className="comment-area" type="text">
        {comments.map((comment) => (
          <CommentList comments={comment} key={comment._id} />
        ))}
      </div>
      <div>
        <AddComment bookID={props.bookID} />
      </div>
    </div>
  );
};

export default CommentArea;

import React from "react";
import Comment from "./Comment"

function Comments({ comments, hideComments }) {

  return (
    <div style={{ display: hideComments ? "none":"" }}>
      <h3>{ comments.length } Comments</h3>
      { comments.map((comment) => (
        <Comment key={ comment.id } comment={ comment }/>
      ))}
    </div>
  )
}

export default Comments;
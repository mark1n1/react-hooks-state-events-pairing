import React, { useState } from "react";
import Comments from "./Comments"

function Information({ video }) {
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);
  const [hideComments, setHideComments] = useState(false);

  function handleUpvotesClick() { 
    setUpvotes(upvotes - 1);
  }

  function handleDownvotesClick() { 
    setDownvotes(downvotes -1);
  }

  function handleHideClick() {
    // hideComments = !hideComments;
    setHideComments(!hideComments);
  }

  return (
    <div>
      <h2>{ video.title }</h2>
      <p><span>{ video.views }</span> Views | Uploaded <span>{ video.createdAt }</span></p>
      <button type="button" onClick={ handleUpvotesClick }>{ upvotes } 👍</button>
      <button type="button" onClick={ handleDownvotesClick }>{ downvotes } 👎</button>
      <div>
        <button type="button" onClick={ handleHideClick }>{ hideComments ? "Show":"Hide"} Comments</button>
      </div>
      <Comments hideComments={hideComments} comments={ video.comments }/>
    </div>
  )
}

export default Information;
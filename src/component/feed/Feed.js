// feed.js
import React from "react";
import Share from "../share/Share";
import "./feed.css";
import Fbpost from "../fbPost/Fbpost";

export default function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
        <Fbpost/>
        <Fbpost/>
        <Fbpost/>
        <Fbpost/>
        {/* <Post key={1} />
        <Post key={2} />
        <Post key={3} />
        <Post key={4} />
        <Post key={5} /> */}
      </div>
    </div>
  );
}

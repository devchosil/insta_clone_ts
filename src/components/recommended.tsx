import React from "react";
import '../../src/App.css';
import "./recommended.scss";

function RecommendedUser(props) {
  return (
    <div>
      <div className="storyInfo">
        <img src={props.데이터.profile} className="profilePic" />
        <div>
          <p>{props.데이터.userId}</p>
          <p>{props.데이터.overlap}</p>
        </div>
      </div>
      <button>팔로우</button>
    </div>
  );
}

export default RecommendedUser;

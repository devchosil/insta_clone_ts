import React from "react";
import "./src/App.css";
import "./story.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-regular-svg-icons";

function Story(props) {
  let 유저데이터 = props.데이터.filter((e) => e.id > 1);

  return (
    <div className="story">
      <FontAwesomeIcon
        icon={faCircleDot}
        className="scroll"
        onClick={() => {
          let storyBox = document.querySelector(".story");
          storyBox.scroll({ left: 600, behavior: "smooth" });
        }}
      />
      {유저데이터.map((a, i) => {
        return (
          <div>
            <div className="storyImg">
              <div className="storyImgBorder"></div>
              <div className="storyPic">
                <img src={유저데이터[i].profile} />
              </div>
            </div>
            <p>{유저데이터[i].userId}</p>
          </div>
        );
      })}
      <FontAwesomeIcon
        icon={faCircleDot}
        className="scroll"
        onClick={() => {
          let storyBox = document.querySelector(".story");
          storyBox.scroll({ left: 0, behavior: "smooth" });
        }}
      />
    </div>
  );
}

export default Story;

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import {
  faFaceSmile,
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import "./src/App.css";
import "./feeds.scss";

function Feeds(props) {
  let [댓글상태, 댓글상태수정] = useState(true);
  let [좋아요, 좋아요수정] = useState(props.데이터.likeCount);
  let style = { color: "red" };
  let [하트색, 하트색수정] = useState(false);
  let [댓글, 댓글수정] = useState(props.코멘트);
  let [입력값, 입력값변경] = useState("");

  let [전체내용, 전체내용수정] = useState(false);

  useEffect(() => {
    좋아요수정(props.데이터.likeCount);
  }, [props.데이터.likeCount]);

  useEffect(() => {
    댓글수정(props.코멘트);
  }, [props.코멘트]);

  return (
    <div>
      <div className="feeds">
        <div className="userInfo">
          <p>
            <img src={props.데이터.profile} className="profilePic" />
            {props.데이터.userId}
          </p>
          <p>
            <FontAwesomeIcon icon={faEllipsis} />
          </p>
        </div>

        <div className="uploadPic">
          <img src={props.데이터.pic} width="100%" />
        </div>

        <div className="comments">
          <div className="icons">
            <p>
              <FontAwesomeIcon
                icon={faHeart}
                className="commentsIcon"
                onClick={() => {
                  좋아요수정(parseInt(좋아요) + 1);
                  하트색수정(true);
                }}
                // style={style}
              />
              <button>
                <FontAwesomeIcon icon={faComment} className="commentsIcon" />
              </button>
              <button>
                <FontAwesomeIcon icon={faPaperPlane} className="commentsIcon" />
              </button>
            </p>

            <button>
              <FontAwesomeIcon icon={faBookmark} />
            </button>
          </div>

          {/* 글내용 */}
          <div className="contents">
            <div id="like">좋아요 {좋아요}개</div>

            {props.데이터.content.length > 30 ? (
              <div className="posting">
                <span className="postingId">{props.데이터.userId}</span>
                {전체내용 ? (
                  <span>{props.데이터.content}</span>
                ) : (
                  <span>
                    <span>{props.데이터.content.substring(0, 30)} ...</span>
                    <span
                      className="moreCtt"
                      onClick={() => {
                        전체내용수정(true);
                      }}
                    >
                      더 보기
                    </span>
                  </span>
                )}
              </div>
            ) : (
              <div className="posting">
                <span className="postingId">{props.데이터.userId}</span>
                <span>{props.데이터.content}</span>
              </div>
            )}

            {/* 댓글내용 */}
            <div className="reply">
              {댓글상태 === true ? (
                <div
                  className="showAll"
                  onClick={() => {
                    댓글상태수정(false);
                  }}
                >
                  댓글 모두 보기
                </div>
              ) : (
                props.코멘트.map((a, i) => {
                  return (
                    <div>
                      <span>{props.코멘트[i].유저id}</span>
                      <span>{props.코멘트[i].comment}</span>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* 댓글 달기 */}
          <div className="post">
            <FontAwesomeIcon icon={faFaceSmile} className="commentsIcon" />

            <input
              type="text"
              placeholder="댓글 달기..."
              onChange={(e) => {
                입력값변경(e.target.value);
              }}
            />

            <button
              onClick={() => {
                댓글.push({
                  id: 댓글.length + 1,
                  유저id: "developer",
                  comment: 입력값,
                });
                댓글수정(JSON.stringify(댓글));
                console.log(댓글);
              }}
            >
              게시
            </button>
          </div>
        </div>
      </div>
      <div className="space"></div>
    </div>
  );
}

export default Feeds;

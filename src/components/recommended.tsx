import React from "react";
// import '../../src/App.css';
import "./recommended.scss";

function RecommendedUser(props) {
  return (
    <>
      <div className="myInfo">
        <div className="storyInfo">
          <div className="myInfoPic">
            <img 
              src="https:/picsum.photos/200/200"
              className="myInfoPic"
              alt="myInfoPic"  
            />
          </div>
          <div className="smallInfo">
            <p>{props.데이터[0].userId}</p>
            <p>{props.데이터[0].userName}</p>
          </div>
        </div>
        <button>전환</button>
      </div>
      <div className="recommend">
        <p>회원님을 위한 추천</p>
        <button>모두 보기</button>
      </div>
      <div className="userList">
        {
          props.유저데이터.map((a, i) => {
            return (
              <div>
                <div className="storyInfo">
                  <div className="profilPic">
                    <img 
                      src={"https://picsum.photos/200/200?random="+i}
                      className="profilePic"
                      alt="profilePic"
                    />
                  </div>
                  <div>
                    <p>{a.userId}</p>
                    <p>{a.overlap}</p>
                  </div>
                </div>
                <button>팔로우</button>
              </div>
          )})
        }
      </div>
    </>
  );
}

export default RecommendedUser;

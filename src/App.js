import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Data from "./dummydata/dummydata";
import Header from "./components/header";
import Story from "./components/story";
import Feeds from "./components/feeds";
import RecommendedUser from "./components/recommended";
import "./components/recommended.scss";

function App() {
  let [데이터, 데이터변경] = useState(Data);
  let 유저데이터 = 데이터.filter((a) => 3 < a.id && a.id < 9);

  return (
    <div className="App">
      <Header 데이터={데이터} />
      <Container>
        <Row className="justify-content-center">
          <Col className="col">
            <div className="space"></div>
            <div className="display">
              <div className="main">
                <Story 데이터={데이터} key={1} />
                <div className="space"></div>
                {데이터.map((a, i) => {
                  return (
                    <Feeds
                      데이터={데이터[i]}
                      코멘트={데이터[i].comments}
                      i={i}
                      key={a.id}
                    />
                  );
                })}
              </div>

              {
                //breakpoint &&
                <div className="aside">
                  <div className="myInfo">
                    <div className="storyInfo">
                      <img src={데이터[0].profile} className="myInfoPic" />
                      <div className="smallInfo">
                        <p>{데이터[0].userId}</p>
                        <p>{데이터[0].userName}</p>
                      </div>
                    </div>
                    <button>전환</button>
                  </div>

                  <div className="recommend">
                    <p>회원님을 위한 추천</p>
                    <button>모두 보기</button>
                  </div>

                  <div className="userList">
                    {유저데이터.map((a, i) => {
                      return (
                        <RecommendedUser 데이터={유저데이터[i]} i={i} key={i} />
                      );
                    })}
                  </div>
                </div>
              }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

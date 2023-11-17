import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import './App.css'
import Data from "./dummydata/dummydata";
import Header from "./components/header";
import Feeds from "./components/feeds";
import RecommendedUser from "./components/recommended";
import "./components/recommended.scss";
import { addComment } from "./store/slice";

import { useAppSelector, useAppDispatch } from "./store/hook";

function App() {
  const test = useAppSelector((state) => state);
  const dispatch = useAppDispatch()

  useEffect(()=>{
    console.log(test);
  })

  let [데이터, 데이터변경] = useState(Data);
  let 유저데이터 = 데이터.filter((a) => 3 < a.id && a.id < 9);

  return (
    <>
    <button 
    onClick={()=>dispatch(addComment({postId:1, comment:{id:5, 유저id:"ts_study" ,comment:"타입스크립트에서 리덕스 사용하기"}}))}>
      테스트
    </button>
      <Header 데이터={데이터} />
      <Container>
        <Row className="justify-content-center">
          <Col className="col-6">
            <Feeds 
              데이터={데이터}
            />
          </Col>
          <Col className="col-3">
            <RecommendedUser 데이터={데이터} 유저데이터={유저데이터}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

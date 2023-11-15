import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPaperPlane,
  faSquarePlus,
  faCompass,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap";
import "./header.scss";
//import { useMediaQuery } from "react-responsive";

function Header(props) {
  //   let headerBreakPoint = useMediaQuery({
  //     query : "(min-width:735px)"
  //   });

  return (
    <header>
      <Container className="container2">
        <Row className="justify-content-center">
          {/* 로고 */}
          <Col className="logo">
            <p style={{ fontFamily: "Lobster" }}>Instagram</p>
          </Col>

          {/* 검색창 */}
          {
            //headerBreakPoint?
            <Col className="search">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="searchIcon"
              />
              <input type="text" placeholder="검색" className="searchInput" />
            </Col>
            //: null
          }

          {/* 버튼 */}
          <Col className="buttons">
            <ul>
              <li>
                <FontAwesomeIcon icon={faHouse} className="headerIcon" />
              </li>
              <li>
                <FontAwesomeIcon icon={faPaperPlane} className="headerIcon" />
              </li>
              <li>
                <FontAwesomeIcon icon={faSquarePlus} className="headerIcon" />
              </li>
              <li>
                <FontAwesomeIcon icon={faCompass} className="headerIcon" />
              </li>
              <li>
                <FontAwesomeIcon icon={faHeart} className="headerIcon" />
              </li>
              <li>
                <img src="profilePic/profile.jpg" className="profilePic" />
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;

import React, { useState, useEffect } from "react";
import Story from './story'
import Posts from './posts';

function Feeds(props) {

  return (
    <>
      <Story 데이터={props.데이터} key={1} />
      <Posts 데이터={props.데이터} />
    </>
  );
}

export default Feeds;

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Charachter = styled.div`
  position: relative;
  border-bottom: black 2px solid;
  padding: 10px 20px;
  border-right: black 2px solid;
  cursor: pointer;
  background-color: transparent;
  transition: 0.25s background-color;
  &:hover {
    background-color: #dbdbdb;
  }
`;

export default function Details(props) {
  const { data, listID, activeButton } = props;

  const changeActive = (idx) => {
    const charachterElements = document.querySelectorAll(".charachter");
    charachterElements.forEach((element) => {
      element.classList.remove("active");
      let rightButton = document.getElementById(idx);
      rightButton.classList.add("active");
    });
  };

  return (
    <Charachter
      className={listID === activeButton ? "active charachter" : "charachter"}
      id={listID}
      onClick={() => changeActive(listID)}>
      <h3>{data.name}</h3>
    </Charachter>
  );
}
//

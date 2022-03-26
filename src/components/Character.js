import React, { useState, useEffect } from "react";
import styled from "styled-components";

let charName;
let charHeight;
let charMass;
let charHair;
let charEyes;
let charBirth;
let charGender;

console.log(charName);

const Charachter = styled.div`
  border-bottom: black 2px solid;
  padding: 10px 20px;
  border-right: black 2px solid;
  cursor: pointer;
  background-color: transparent;
  transition: 0.25s background-color;
  &:hover {
    background-color: #dbdbdb;
  }
  /* &::before {
    content: "
      Name - ${charName}
      Height - ${charHeight}
      Mass - ${charMass}
      Hair - ${charHair}
      Eyes - ${charEyes}
      Birth - ${charBirth}
      Gender - ${charGender}
      
      
      ";
  } */
`;

export default function Details(props) {
  const { data, listID, activeButton } = props;
  charName = data.name;
  charHeight = data.height;
  charMass = data.mass;
  charHair = data.hair_color;
  charEyes = data.eye_color;
  charBirth = data.birth_year;
  charGender = data.gender;

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

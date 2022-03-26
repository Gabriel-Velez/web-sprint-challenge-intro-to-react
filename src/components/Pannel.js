import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { API_BASE_URL } from "../Constants";

const Pannel = styled.div`
  grid-area: 1 / 2 / 12 / 3;
  border-bottom: black 2px solid;
  padding: 10px 40px;
`;

export default function Details(props) {
  const { charachters, activeButton } = props;
  let testUndefined = charachters === undefined ? true : false;

  return (
    <Pannel className='pannel'>
      {/* <h1>{testUndefined ? "" : charachters[activeButton].name}</h1>
      <p>height: {testUndefined ? "" : charachters[activeButton].height}</p>
      <p>mass: {testUndefined ? "" : charachters[activeButton].mass}</p>
      <p>hair color: {testUndefined ? "" : charachters[activeButton].hair_color}</p>
      <p>eye color: {testUndefined ? "" : charachters[activeButton].eye_color}</p>
      <p>birth year: {testUndefined ? "" : charachters[activeButton].birth_year}</p>
      <p>gender: {testUndefined ? "" : charachters[activeButton].gender}</p> */}
    </Pannel>
  );
}

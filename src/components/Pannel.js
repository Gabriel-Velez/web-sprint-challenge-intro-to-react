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
  let testUndefined = charachters === undefined || charachters.length === 0 ? true : false;
  console.log(testUndefined);
  //   console.log(charachters[activeButton]);
  console.log(charachters);
  //   console.log(activeButton);
  return (
    <Pannel className='pannel'>
      <h1>Info was suposed to go here </h1>
      <h3>
        This caused my whole app to not render. <br /> Asked for help, didnt get any ;(
      </h3>
      <p>height:</p>
      <p>mass:</p>
      <p>hair color:</p>
      <p>eye color:</p>
      <p>birth year:</p>
      <p>gender:</p>
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

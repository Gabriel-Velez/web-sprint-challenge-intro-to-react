import React from "react";
import styled from "styled-components";

const Pannel = styled.div`
  grid-area: 1 / 2 / 12 / 3;
  border-bottom: black 2px solid;
  padding: 10px 40px;
`;

export default function Details(props) {
  const { charachters, activeButton } = props;
  return (
    <Pannel className='pannel'>
      <h1>{charachters[activeButton].name}</h1>
      <p>height: {charachters[activeButton].height}</p>
      <p>mass: {charachters[activeButton].mass}</p>
      <p>hair color: {charachters[activeButton].hair_color}</p>
      <p>eye color: {charachters[activeButton].eye_color}</p>
      <p>birth year: {charachters[activeButton].birth_year}</p>
      <p>gender: {charachters[activeButton].gender}</p>
    </Pannel>
  );
}

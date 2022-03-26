import React from "react";
import styled from "styled-components";

const PageNumber = styled.div`
  grid-area: 12 / 1 / 13 / 3;
  padding: 10px 25px;
  display: flex;
  align-items: baseline;
  gap: 10%;
  a {
    color: black;
  }
`;

let currentNumber = 1;

export default function Details(props) {
  return (
    <PageNumber className='pageNumber'>
      <h3>Page Number</h3>
      <a href='#'>{currentNumber}</a>
      <a href='#'>{currentNumber + 1}</a>
      <a href='#'>{currentNumber + 2}</a>
      <a href='#'>{currentNumber + 3}</a>
      <a href='#'>{currentNumber + 4}</a>
    </PageNumber>
  );
}

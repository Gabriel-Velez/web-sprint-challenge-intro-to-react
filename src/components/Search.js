import React from "react";
import styled from "styled-components";

const Search = styled.div`
  border-bottom: black 2px solid;
  padding: 10px 20px;
  border-right: black 2px solid;
  display: flex;
  align-items: center;
  input {
    width: 80%;
    height: 80%;
    background-color: transparent;
    border: none;
    border-bottom: 2px black solid;
    margin-bottom: 30px;
    padding: 5px 15px;
  }
`;

export default function Details(props) {
  return (
    <Search className='search'>
      <i className='fa-solid fa-magnifying-glass'></i>
      <input placeholder='search'></input>
    </Search>
  );
}

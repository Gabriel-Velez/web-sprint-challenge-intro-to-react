import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Search from "./Search";
import Charachter from "./Character";
import Pannel from "./Pannel";
import PageNumber from "./PageNumber";

let numOfItems;

const Window = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(${numOfItems}, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: clamp(50vw, 1000px, 100vw);
  text-align: left;
`;

export default function Details(props) {
  const { charachters, next, perv } = props;
  const [activeButton, setActiveButton] = useState(0);
  numOfItems = charachters.length + 2;

  useEffect(() => {
    const charachterElements = document.querySelectorAll(".charachter");
    charachterElements.forEach((element) => {
      element.addEventListener("click", () => {
        setTimeout(() => {
          setActiveButton(document.querySelector(".active").id);
          return () => {
            element.removeEventListener("click", false);
          };
        }, 10);
      });
    });
  }, []);

  return (
    <Window className='window'>
      <Search />
      {charachters.map((charachter, idx) => {
        return <Charachter data={charachter} key={idx} activeButton={activeButton} listID={idx} />;
      })}
      <Pannel charachters={charachters} activeButton={activeButton} />
      <PageNumber />
    </Window>
  );
}

// {/*Add as many charars as the length of the array*/}
//<Pannel />
//<PageNumber />

import React, { useState, useEffect } from "react";
import axios from "axios";
import Window from "./Components/Window";
import { API_BASE_URL } from "./Constants";

function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [charachterObject, setCharachterObject] = useState({});
  const [nextLink, setNextLink] = useState("#");
  const [prevLink, setPrevLink] = useState("#");

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}people/`)
      .then((res) => {
        setCharachterObject(res.data);
        setNextLink(res.next);
        setPrevLink(res.previous);
        console.log(res);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='App'>
      <Window charachters={charachterObject} next={nextLink} prev={prevLink} />
    </div>
  );
}

export default App;

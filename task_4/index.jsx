import { Component, useRef } from "react";

const MainComponent = () => {
  const myRef = useRef(null); // create simple ref
  return <ChildComponent myRef={myRef} />; // pass ref as a prop
};

const ChildComponent = ({ myRef }) => {
  return (
    <button ref={myRef}>button with ref</button> // receive ref and set it to the button
  );
};

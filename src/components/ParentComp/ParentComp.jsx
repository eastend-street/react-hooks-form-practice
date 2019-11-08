import React, { useState } from "react";
import Form from "../Form/Form";

const ParentComp = () => {
  const [parentState, setParentState] = useState("");
  return (
    <>
      <Form parentFunc={setParentState} />
      <p>Name: {parentState.name}</p>
      <p>Email: {parentState.email}</p>
      <p>Comment: {parentState.comment}</p>
      <p>Select: {parentState.select}</p>
    </>
  );
};

export default ParentComp;

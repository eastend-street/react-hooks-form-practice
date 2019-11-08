import React, { useState } from "react";

const Form = props => {
  const [state, setState] = useState({
    name: "jun",
    email: "jun@gmail.com",
    comment: "",
    select: ""
  });
  const { name, email, comment, select } = state;

  const handleSubmit = e => {
    e.preventDefault();
    console.log(props.parentFunc(state));
    console.log("submit!", state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input
          value={name}
          onChange={e => setState({ ...state, name: e.target.value })}
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => setState({ ...state, email: e.target.value })}
        />
      </div>
      <div>
        <label>Comments: </label>
        <input
          type="comments"
          name="Comments"
          value={comment}
          onChange={e => setState({ ...state, comment: e.target.value })}
        />
      </div>
      <div>
        <select
          name="select"
          value={select}
          onChange={e => setState({ ...state, select: e.target.value })}
        >
          <option value="frog">Frog</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>
      </div>
      <div>
        <input type="submit" value="submit" />
      </div>
    </form>
  );
};

export default Form;

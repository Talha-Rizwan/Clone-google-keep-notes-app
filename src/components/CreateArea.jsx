import React, { useState } from "react";

function CreateArea(props) {
  const [currTotal, setTotal] = useState({ title: "", content: "" });
  // const [currContent, setContent] = useState("");

  function handleChange(e) {
    setTotal((prevValue) => {
      return {
        ...prevValue,
        [e.target.name]: e.target.value
      };
    });
  }

  // function handleContent(e) {
  //   setContent(e.target.value);
  // }

  function notSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={notSubmit}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={currTotal.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={currTotal.content}
        />
        <button
          onClick={() => {
            props.toAdd(currTotal.title, currTotal.content);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;

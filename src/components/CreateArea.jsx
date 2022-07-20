import React, { useState } from "react";

function CreateArea(props) {
  const [text, setText] = useState({
    title: "",
    content: "",
  });

  function updateText(event) {
    const { name, value } = event.target;
    setText((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function defaultPreventer(event) {
    props.onAdd(text);
    setText({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={updateText}
          name="title"
          placeholder="Title"
          value={text.title}
        />
        <textarea
          onChange={updateText}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={text.content}
        />
        <button onClick={defaultPreventer}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

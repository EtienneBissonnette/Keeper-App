import React, { useState } from "react";

function CreateNote(props) {
  const [inputText, updateInputText] = useState({ title: "", content: "" });

  function updateCreateNote(event) {
    const { name, value } = event.target;
    name === "title"
      ? updateInputText((prevValue) => {
          return { title: value, content: prevValue.content };
        })
      : updateInputText((prevValue) => {
          return { title: prevValue.title, content: value };
        });
  }
// TODO form html element is not working with this format but css is styles based on this element need either change css and use a div, or send info with form
  return (
    <form> 
      <div>
        <input
          onChange={updateCreateNote}
          placeholder="Title"
          value={inputText.title}
          name="title"
        />
        <textarea
          onChange={updateCreateNote}
          placeholder="Compose your note..."
          value={inputText.content}
        />
      </div>
      <div>
        <button
          onClick={() => {
            props.onAdd(inputText);
          }}
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default CreateNote;

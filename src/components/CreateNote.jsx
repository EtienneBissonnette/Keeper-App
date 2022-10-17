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
    if (name === "createNoteForm"){
        updateInputText({ title: "", content: "" })
    }
  }

  return (
    <form
      name="createNoteForm"
      onSubmit={(event) => {
        props.onAdd(inputText);
        event.preventDefault(); //prevents automatic refresh from form submit
        updateCreateNote(event)
      }}
    >
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
          name="content"
        />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default CreateNote;

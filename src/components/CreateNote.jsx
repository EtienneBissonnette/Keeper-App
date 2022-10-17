import React, { useState } from "react";
import PostAddIcon from "@mui/icons-material/PostAdd";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateNote(props) {
  const [inputText, updateInputText] = useState({ title: "", content: "" });
  const [params, updateParams] = useState({
    hiddenTitleField: true,
    rows: "1",
    zoom: false,
  });

  function updateCreateNote(event) {
    const { name, value } = event.target;

    //USING TERNARY CONDITIONALS, not very clean...

    // name === "title"
    //   ? updateInputText((prevValue) => {
    //       return { title: value, content: prevValue.content };
    //     })
    //   : updateInputText((prevValue) => {
    //       return { title: prevValue.title, content: value };
    //     });

    //USING Spread operator with previous state values, to change previous values based on key and name from event.target:

    updateInputText((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  return (
    <form
      class="create-note"
      name="createNoteForm"
      onSubmit={(event) => {
        props.onAdd(inputText);
        event.preventDefault(); //prevents automatic refresh from form submit
        updateInputText({ title: "", content: "" });
        updateParams({ hiddenTitleField: true, rows: "1", zoom: false });
      }}
    >
      <div>
        <input
          onChange={updateCreateNote}
          placeholder="Title"
          value={inputText.title}
          name="title"
          hidden={params.hiddenTitleField}
        />
        <textarea
          onChange={updateCreateNote}
          placeholder="Compose your note..."
          value={inputText.content}
          name="content"
          rows={params.rows}
          onClick={() => {
            updateParams({
              hiddenTitleField: false,
              rows: "5",
              zoom: true,
            });
          }}
        />
      </div>
      <Zoom in={params.zoom}>
        <Fab type="submit">
          <PostAddIcon />
        </Fab>
      </Zoom>
    </form>
  );
}

export default CreateNote;

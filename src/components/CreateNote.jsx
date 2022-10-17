import React, { useState } from "react";
import PostAddIcon from "@mui/icons-material/PostAdd";
import Fab from "@mui/material/Fab";
import Zoom from '@mui/material/Zoom';

function CreateNote(props) {
  const [inputText, updateInputText] = useState({ title: "", content: "" });

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
      <Zoom in ={true}>
        <Fab type="submit">
          <PostAddIcon />
        </Fab>
      </Zoom>
    </form>
  );
}

export default CreateNote;

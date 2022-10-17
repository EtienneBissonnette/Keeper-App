import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";
// import { notes } from "../db/db_notes";

function App() {
  const [notes, updateNotes] = useState([]);

  function createNotes(newNote) {
    updateNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    updateNotes(notes.filter((note,index) => index !== id));
  }

  return (
    <div>
      <Header />
      <CreateNote onAdd={createNotes} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import NotesList from "./components/NotesList";
import SearchBar from "./components/SearchBar";
import "./index.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [term, setTerm] = useState("");

  let id = Math.floor(Math.random() * 10000);

  const addNoteHandler = (text) => {
    const date = new Date().getDate();
    const newNote = {
      date: date,
      text,
      id: id,
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNoteHandler = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className="container">
      {notes.length > 0 && <SearchBar term={term} setTerm={setTerm} />}
      <NotesList
        notes={notes.filter((note) => note.text.toLowerCase().includes(term))}
        addNoteHandler={addNoteHandler}
        deleteNoteHandler={deleteNoteHandler}
      />
    </div>
  );
};

export default App;

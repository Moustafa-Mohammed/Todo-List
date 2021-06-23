import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

function NotesList({ notes, addNoteHandler, deleteNoteHandler }) {
  return (
    <div className="notes-list">
      <AddNote addNoteHandler={addNoteHandler} />

      {notes.map((note) => {
        return <Note text={note.text} date={note.date} id={note.id} deleteNoteHandler={deleteNoteHandler}/>;
      })}
    </div>
  );
}

export default NotesList;

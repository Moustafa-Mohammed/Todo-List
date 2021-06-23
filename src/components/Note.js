import React from "react";

function Note({ text, date, id, deleteNoteHandler }) {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <div className="note-btns">
          <button
            className="btn edit-btn"
            onClick={() => deleteNoteHandler(id)}
          >
            Edit
          </button>
          <button
            className="btn delete-btn"
            onClick={() => deleteNoteHandler(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Note;

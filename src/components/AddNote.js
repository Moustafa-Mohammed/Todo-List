import React, { useState } from "react";

function AddNote({ addNoteHandler }) {
  const [noteText, setNoteText] = useState("");
  let charLimit = 150;

  const onTextareaChange = (e) => {
    if (charLimit - e.target.value.length > -1) {
      setNoteText(e.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      addNoteHandler(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new-note">
      <textarea
        cols="8"
        rows="6"
        placeholder="Add your note here"
        value={noteText}
        onChange={onTextareaChange}
      ></textarea>
      <div className="note-footer">
        <small>{charLimit - noteText.length} characters remaining</small>
        <button className="btn save-btn" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNote;

import React, { useEffect } from "react";
import { useState } from "react";
import NoteForm from "./NoteForm";
import { savedNotes } from "./Note";
import { Alert } from "./Modal";
import NotesList from "./NotesList";
import { deletedNotes } from "../DeletedNotes";

const NoteWrapper = () => {
  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentNote, setCurrentNote] = useState("");
  const [updatedDate, setUpdatedDate] = useState("");
  const [backgroundText, setBackgroundText] = useState("Loading Notes...");

  useEffect(() => {
    const storedNotes = [];
    savedNotes
      .iterate((value) => {
        const storedNote = {
          id: value.id,
          date: value.date,
          title: value.title,
          text: value.text,
          updatedDate: value.updatedDate,
          emoji: value.emoji,
        };

        storedNotes.push(storedNote);
      })
      .then(() => {
        setNotes([...notes, ...storedNotes]);
        setBackgroundText("😽 No notes yet");
      });

    //eslint-disable-next-line
  }, []);

  const addNote = (id, date, title, text, emoji) => {
    const newNotes = [...notes, { id, date, title, text, updatedDate, emoji }];
    setNotes(newNotes);
  };

  const removeNote = (index, key, note) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      const newNotes = [...notes];
      newNotes.splice(index, 1);

      deletedNotes.setItem(key, {
        id: note.id,
        title: note.title,
        text: note.text,
        date: note.date,
        updatedDate: note.updatedDate,
        emoji: note.emoji,
      });
      savedNotes.removeItem(key);
      setNotes(newNotes);
    }
  };
  const updateNote = () => {
    setShowModal(false);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const onNoteClick = (note) => {
    setShowModal(true);
    setCurrentNote(note);
  };
  return (
    <div className="app" lang="en">
      <h1 className="app-title">Notes Go Here 👇: </h1>

      <NoteForm addNote={addNote} currentNote={currentNote} />

      {showModal ? (
        <Alert
          addNote={addNote}
          showModal={showModal}
          closeModal={closeModal}
          updateNote={updateNote}
          setUpdatedDate={setUpdatedDate}
          currentNote={currentNote}
        />
      ) : null}

      <NotesList
        notes={notes}
        removeNote={removeNote}
        onNoteClick={onNoteClick}
        backgroundText={backgroundText}
      />
    </div>
  );
};

export default NoteWrapper;

// const [deletedNotesToDisplay, setDeletedNotesToDisplay] = useState([{}]);
// const [isDisplayingDeletedNotes, setIsDisplayingDeletedNotes] =
//   useState(false);
// const [deletedNotesButton, setDeletedNotesButton] =
//   useState("Show Deleted Notes");
// const deletedNotesArray = [];

// <button onClick={showDeletedNotes}>{deletedNotesButton}</button>

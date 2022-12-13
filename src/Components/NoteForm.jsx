import { useState } from "react";
import { AddNoteButton, CloseModalButton, UpdateNoteButton } from "./Buttons";
import { emojis } from "./Emoji";

const NoteForm = ({
  addNote,
  showModal,
  closeModal,
  updateNote,
  currentNote,
}) => {
  const currentDate = new Date();
  const dateString = currentDate.toDateString();
  const timeString = currentDate.toLocaleTimeString();

  const newDate = new Date();
  const newDateString = newDate.toDateString();
  const newTimeString = newDate.toLocaleTimeString();

  const [titleValue, setTitleValue] = useState(currentNote.title);
  const [textValue, setTextValue] = useState(currentNote.text);
  const [id, setId] = useState(1);
  const [date, setDate] = useState(`${dateString} at ${timeString}`);
  const [emoji, setEmoji] = useState(
    emojis[Math.floor(Math.random() * emojis.length)]
  );
  const [showError, setShowError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!textValue) {
      setShowError(true);
      return;
    }
    setShowError(false);
    addNote(id, date, titleValue, textValue, emoji);
    setTextValue("");
    setTitleValue("");
    setDate(`${dateString} at ${timeString}`);
    setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
    // setId(id + 1);
    setId(emoji);
  };

  const Buttons = ({ updateNote, closeModal }) => {
    if (showModal) {
      return (
        <div>
          <UpdateNoteButton
            updateNote={(e) => {
              updateNote();
              currentNote.title = titleValue;
              currentNote.text = textValue;
              currentNote.updatedDate = `${newDateString} at ${newTimeString}`;
            }}
          />
          <CloseModalButton closeModal={closeModal} />
        </div>
      );
    }
    return (
      <AddNoteButton
        disabled={!textValue}
        onClick={(e) => {
          handleSubmit(e);
          setDate(`${dateString} at ${timeString}`);
        }}
      />
    );
  };

  return (
    <div className="flex-column">
      <form
        className="flex-column"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          placeholder="Title"
          className="input"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
        />
        <div className="bottom-border"></div>
        <textarea
          type="text"
          className="input"
          value={textValue}
          onChange={(e) => {
            setTextValue(e.target.value);
            setShowError(false);
          }}
          placeholder="What's on your mind?"
        />
        {showError ? (
          <div>
            <h1>
              <div className="error-text">
                {" "}
                Please enter some text to create a note.{" "}
              </div>
              Don't be afraid to share 🤗
            </h1>
          </div>
        ) : null}
      </form>
      <Buttons updateNote={updateNote} closeModal={closeModal} />
    </div>
  );
};

export default NoteForm;

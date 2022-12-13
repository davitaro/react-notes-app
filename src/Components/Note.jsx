import localforage from "localforage";

export var savedNotes = localforage.createInstance({
  name: "Saved Notes",
});

const Note = ({ note, index, removeNote, onNoteClick }) => {
  savedNotes
    .setItem(note.emoji, {
      id: note.id,
      title: note.title,
      text: note.text,
      date: note.date,
      updatedDate: note.updatedDate,
      emoji: note.emoji,
    })
    .then((value) => {
      //console.log(value);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div className="note" key={note.key}>
      <div className="edit-note" onClick={() => onNoteClick(note)}>
        <p className="x-small">created on {note.date}</p>
        {note.updatedDate ? (
          <p className="x-small"> Updated: {note.updatedDate} </p>
        ) : null}
        <h1>{note.title}</h1>
        <p>{note.text}</p>
        <div type="img">{note.emoji}</div>
      </div>
      <button
        onClick={() => removeNote(index, note.emoji, note)}
        className="delete-button"
      >
        x
      </button>
    </div>
  );
};

export default Note;

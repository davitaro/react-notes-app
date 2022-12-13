import Note from "./Note";
import { FaCat } from "react-icons/fa";


const NotesList = ({ notes, removeNote, onNoteClick, backgroundText }) => {
  return notes.length > 0 ? (
    <div className="note-list">
      {notes.map((note, index) => (
        <Note
          key={note.emoji}
          index={index}
          note={note}
          removeNote={removeNote}
          onNoteClick={onNoteClick}
          updatedDate={note.updatedDate}
          emoji={note.emoji}
        />
      ))}
    </div>
  ) : (
    <h1>
      {backgroundText} <FaCat />
    </h1>
  );
};

export default NotesList;

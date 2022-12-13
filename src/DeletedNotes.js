import localforage from "localforage";

export const deletedNotes = localforage.createInstance({
  name: "Deleted Notes",
});

// const DeletedNotes = (props) => {
//   const getDeletedNotes = () => {
//     deletedNotes
//       .iterate((value) => {
//         const deletedNote = {
//           id: value.id,
//           date: value.date,
//           title: value.title,
//           text: value.text,
//           updatedDate: value.updatedDate,
//           emoji: value.emoji,
//         };
//         deletedNotesArray.push(deletedNote);
//       })
//       .then(() => {
//         setDeletedNotesToDisplay([...deletedNotesArray]);

//         console.log(deletedNotesToDisplay);
//       });
//   };

//   const showDeletedNotes = () => {
//     getDeletedNotes();
//     setIsDisplayingDeletedNotes(!isDisplayingDeletedNotes);
//     !isDisplayingDeletedNotes
//       ? setDeletedNotesButton("Hide Deleted Notes")
//       : setDeletedNotesButton("Show Deleted Notes");
//   };

//   return (
//     <div>
//       {isDisplayingDeletedNotes ? (
//         <div className="note-list">
//           {" "}
//           {deletedNotesToDisplay.map((note, index) => (
//             <Note
//               key={note.emoji}
//               index={index}
//               // note={note}
//               // removeNote={removeNote}
//               onNoteClick={onNoteClick}
//               updatedDate={note.updatedDate}
//               emoji={note.emoji}
//             />
//           ))}
//         </div>
//       ) : (
//         <h1>
//           {" "}
//           Nothing to see here <FaCat />{" "}
//         </h1>
//       )}
//     </div>
//   );
// };

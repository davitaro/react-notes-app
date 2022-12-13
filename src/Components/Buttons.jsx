export const AddNoteButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={props.disabled ? "disabled" : ""}
    >
      ADD
    </button>
  );
};

export const CloseModalButton = ({ closeModal }) => {
  return <button onClick={closeModal}>CLOSE</button>;
};

export const UpdateNoteButton = ({ updateNote }) => {
  return <button onClick={updateNote}>UPDATE</button>;
};

import NoteForm from "./NoteForm";
import reactDom from "react-dom";

export const Alert = ({
  showModal,
  addNote,
  closeModal,
  updateNote,
  currentNote,
}) => {
  return (
    <Modal>
      <div className="modal">
        <div className="modal-content">
          <NoteForm
            showModal={showModal}
            addNote={addNote}
            closeModal={closeModal}
            updateNote={updateNote}
            currentNote={currentNote}
          />
        </div>
      </div>
    </Modal>
  );
};

const Modal = (props) => {
  return reactDom.createPortal(
    props.children,
    document.getElementById("modal")
  );
};
export default Modal;

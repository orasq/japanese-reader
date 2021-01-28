import React from "react";
import { FaTrash } from "react-icons/fa";

function ConfirmModal(props) {
  return (
    <div className="confirm-modal">
      <span className="confirm-modal__text">Permanently delete this book?</span>
      <div className="confirm-modal__btn-wrap">
        <button
          onClick={e => props.handleHideModalDisplay()}
          className="confirm-modal__btn confirm-modal__btn--ghost"
        >
          Cancel
        </button>
        <button onClick={e => props.handleDelete()} className="confirm-modal__btn">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ConfirmModal;

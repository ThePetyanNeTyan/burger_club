import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import styles from './Modal.module.css';

const modalRoot = document.getElementById("modal");

export function Modal({ onClose, children }) {
  useEffect(() => {
      const escClick = (event) => {
          if (event.key === "Escape") {
              onClose();
          }
      };

      document.addEventListener("keydown", escClick, false);

      return () => {
          document.removeEventListener("keydown", escClick);
      };
  }, [onClose]);

  return ReactDOM.createPortal(
      <ModalOverlay onClose={onClose}>
          <div className={styles.main} onClick={(evt) => evt.stopPropagation()}>
              {React.cloneElement(children, { close: onClose })}
          </div>
      </ModalOverlay>,
      modalRoot
  );
}
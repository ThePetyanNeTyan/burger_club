import styles from "./ModalOverlay.module.css";

const ModalOverlay = ({ onClose, children }) => {
  const handleClickOutside = (event) => {
    if (event.target.className === styles.modalOverlay) {
      onClose();
    }
  };

  return (
    <>
      <div className={styles.modalOverlay} onClick={handleClickOutside}>
        {children}
      </div>
    </>
  );
};

export default ModalOverlay;
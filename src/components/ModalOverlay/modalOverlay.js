import styles from "./modalOverlay.module.css";

const ModalOverlay = (props) => {
  return (
    <div className={styles.modalPrev} onClick={props.onClose} >
      {props.children}
    </div>
  );
};

export default ModalOverlay;
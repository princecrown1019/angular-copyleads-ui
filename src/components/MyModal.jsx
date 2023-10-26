import React from 'react';
import styles from './MyModal.module.css';

const MyModal = ({ isOpen, onClose, children }) => {
  return isOpen ? (
    <div className={styles.modal}>
      <div className={styles.modal_overlay} onClick={onClose}></div>
      <div className={styles.modal_content}>{children}</div>
    </div>
  ) : null;
};

export default MyModal;

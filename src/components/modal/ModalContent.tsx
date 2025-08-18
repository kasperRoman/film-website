import React, { useRef } from 'react';
import styles from './modal.module.scss';

type ModalContentProps = {
  onClose?: () => void;
  children: React.ReactNode;
};

export const ModalContent: React.FC<ModalContentProps> = ({ onClose, children }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const closeModal = () => {
    if (contentRef.current?.parentNode instanceof HTMLElement) {
      contentRef.current.parentNode.classList.remove(styles.active);
    }
    onClose?.();
  };

  return (
    <div ref={contentRef} className={styles.content}>
      {children}
      <div className={styles.close} onClick={closeModal}>
        <i className="bx bx-x"></i>
      </div>
    </div>
  );
};

export default ModalContent
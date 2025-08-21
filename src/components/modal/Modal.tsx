import React, { useState, useEffect} from 'react';
import styles from './modal.module.scss'
type ModalProps = {
  active?: boolean;
  id?: string;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ active, id, children }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (active) {
      setIsActive(false);
      const timer = setTimeout(() => setIsActive(true), 20);
      return () => clearTimeout(timer);
    } else {
      setIsActive(false);
    }
  }, [active]);

  // if (!active && !isActive) return null; // коли закрито, не рендеримо

  return (
    <div id={id} className={`${styles.modal} ${isActive ? styles.active : ''}`}>
      {children}
    </div>
  );
};

export default Modal;
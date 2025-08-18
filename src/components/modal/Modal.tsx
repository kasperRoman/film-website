import React, { useState, useEffect} from 'react';
import styles from './modal.module.scss'
type ModalProps = {
  active?: boolean;
  id?: string;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ active: activeProp = false, id, children }) => {
  const [active, setActive] = useState(activeProp);

  useEffect(() => {
    setActive(activeProp);
  }, [activeProp]);

  return (
    <div id={id} className={`${styles.modal} ${active ? styles.active : ''}`}>
      {children}
    </div>
  );
};

export default Modal;
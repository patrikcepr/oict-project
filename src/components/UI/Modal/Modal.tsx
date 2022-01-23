import React, { FC, Fragment, useContext } from 'react';
import ReactDom from 'react-dom';

import AppContext from '../../../store/appContext';

import styles from './Modal.module.sass';

import { IChildren } from '../../../store/appContext';

interface IBackdrop {
  hideModal: () => void;
}
const Backdrop: FC<IBackdrop> = ({ hideModal }): JSX.Element => {
  return <div className={styles.backdrop} onClick={hideModal}></div>;
};

const ModalOverlay: FC<IChildren> = ({ children }): JSX.Element => {
  return <div className={styles.modal}>{children}</div>;
};

const Modal: FC<IChildren> = ({ children }): JSX.Element => {
  const ctx = useContext(AppContext);

  const { hideModal } = ctx;

  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop hideModal={hideModal} />,
        document.getElementById('backdrop-root') as HTMLElement
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </Fragment>
  );
};

export default Modal;

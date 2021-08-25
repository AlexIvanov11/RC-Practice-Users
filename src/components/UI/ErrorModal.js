import React from "react";
import ReactDOM from "react-dom";

import styles from "./ErrorModal.module.css";
import { Card } from "./Card";
import { Button } from "./Button";

const Backrop = (props) => {
  return <div className={styles.backdrop} onClick={props.dismiss} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.dismiss}>Okay</Button>
      </footer>
    </Card>
  );
};

export const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backrop dismiss={props.dismiss} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          dissmiss={props.dismiss}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

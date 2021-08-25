import React, { useState, useRef } from "react";

import styles from "./AddUser.module.css";

import { Card } from "../UI/Card";
import { Button } from "../UI/Button";
import { ErrorModal } from "../UI/ErrorModal";

export const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState(null);

  const addUserHandler = (event) => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const age = ageInputRef.current.value;
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (greater than 0)",
      });
      return;
    }
    props.addUser(name, age);
    // Typically, you should NOT DO THAT - do not modify DOM elements via refs
    // But for resetting inputs value it seems to be okay
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const dismissHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          dismiss={dismissHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

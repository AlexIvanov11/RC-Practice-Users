import React from "react";

import styles from "./UserList.module.css";
import { Card } from "../UI/Card";

export const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users?.map((user) => {
          return (
            <li key={user.id}>{`${user.username} - ${user.age} years old`}</li>
          );
        })}
      </ul>
    </Card>
  );
};

import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import React, { useRef, useState } from "react";
const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef);
    if (enteredAge.trim().length === 0 || enteredUserName.trim().length === 0) {
      setError({
        title: "indaliv input",
        message: "please enter a valid name and age (none empty value).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "indaliv input",
        message: "please enter a valid  age (>1).",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredAge("");
    setEnteredUserName("");
  };
  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}

      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label>userName</label>
          <input
            ref={nameInputRef}
            id="username"
            type="text"
            value={enteredUserName}
            onChange={userNameChangeHandler}
          ></input>
          <label>Age(Year)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
            ref={ageInputRef}
          ></input>
          <Button type="submit">add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

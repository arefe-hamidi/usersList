const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={addUserHandler}>
      <label>userName</label>
      <input id="username" type="text"></input>
      <label>Age(Year)</label>
      <input id="age" type="number"></input>
      <button type="submit">add User</button>
    </form>
  );
};

export default AddUser;

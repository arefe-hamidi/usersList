import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} (age : {user.age})
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UsersList;
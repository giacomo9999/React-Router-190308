import React from "react";
import { Route, Link } from "react-router-dom";

const userList = [
  { name: "Wilhelmina", id: 1 },
  { name: "Gertrude", id: 2 },
  { name: "Rasputin", id: 3 }
];

const User = ({ location }) => <p>{location.pathname}</p>;
// const User = () => <p>{"User Name"}</p>;

class Users extends React.Component {
  render() {
    console.log(this.props);
    const { url } = this.props.match;

    return (
      <div>
        <h1>Users</h1>
        <strong>Select A User</strong>
        <div>
          <ul>
            {userList.map(entry => {
              return (
                <li key={entry.id}>
                  <Link to={`/users/${entry.name}`}>{entry.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <Route path="/users/:id" component={User} />
      </div>
    );
  }
}

export default Users;

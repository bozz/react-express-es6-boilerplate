require('../styles/userList.scss');

var React = require('react');
var UserListItem = require('./UserListItem');


/* Class Description... */
class UserList extends React.Component {
  render() {
    var userNodes = this.props.data.map(function(user) {
      return (
        <UserListItem user={user} />
      );
    });

    return (
      <div className="user-list">
        <h2>Sample List of Users</h2>
        <ul>
          {userNodes}
        </ul>
      </div>
    );
  }
}

export default UserList;

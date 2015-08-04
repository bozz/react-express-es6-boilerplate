require('../styles/userList.scss');

var React = require('react');
var UserListItem = require('./UserListItem');
var request = require('superagent');


/* Class Description... */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  loadUsersFromServer() {
    request
      .get('/api/users')
      .set('Accept', 'application/json')
      .end( (err, res) => {
        if(err) {
          console.error("Failed to load users", res.error.message);
          return;
        }
        this.setState({users: res.body});
      });
  }

  componentDidMount() {
    this.loadUsersFromServer();
  }

  render() {
    var userNodes = this.state.users.map(function(user) {
      return (
        <UserListItem user={user} />
      );
    });

    if(!userNodes.length) {
      userNodes.push(<li>No users found</li>);
    }

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

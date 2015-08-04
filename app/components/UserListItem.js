var React = require('react');


/* Class Description... */
class UserListItem extends React.Component {
  render() {
    var user = this.props.user;
    return (
      <li>{user.firstName} {user.lastName}</li>
    )
  }
}

export default UserListItem;

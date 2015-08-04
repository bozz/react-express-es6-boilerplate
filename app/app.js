require('./styles/app.scss');

var UserList = require('./components/UserList');
var React = require('react');

var users = [
  {firstName: "John", lastName: "Doe"},
  {firstName: "Susie", lastName: "Miller"},
  {firstName: "Dan", lastName: "Fletcher"}
];

React.render(<UserList data={users} />, document.getElementById('content'));


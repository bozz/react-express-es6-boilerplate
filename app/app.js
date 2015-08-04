require('./styles/app.scss');

var UserList = require('./components/UserList');
var React = require('react');

React.render(<UserList />, document.getElementById('content'));


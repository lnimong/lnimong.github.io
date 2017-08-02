
var React = require('react/addons');
var TreeApp = React.createFactory(require('./flux.js').ReactClass);
React.render(new TreeApp({}), document.getElementById("root"));
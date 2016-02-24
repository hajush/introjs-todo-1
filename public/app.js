var Todos = React.createClass({
  render: function() {
    return (
      <div>
        <h2> My list of todos </h2>
      </div>
      )
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Todos/>
      </div>
      )
  }
});

React.render(<App/>, document.getElementById('app'));
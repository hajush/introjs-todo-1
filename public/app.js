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
  getInitialState: function() {
    return {
      todos : []
      }
  },
  loadTodosFromServer: function() {
    $.ajax({
      url: '/api/todos',
      method: 'GET'
    }).done(function(todos){
      console.log(todos);
      this.setState({todos: todos})
    }.bind(this))
  },
  componentDidMount: function(){
    this.loadTodosFromServer();
  },
  render: function() {
    return (
      <div>
        <Todos/>
      </div>
      )
  }
});

React.render(<App/>, document.getElementById('app'));
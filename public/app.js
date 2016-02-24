var Todos = React.createClass({
  render: function() {
    var todos = this.props.todos.map(function(t){
      return (
        <div className="panel panel-default" key={t._id}>
          <div className="panel-body">
            <h3> { t.name }  </h3>
            <p> { t.description } </p>
          </div>
          <div className="panel-footer">
            <p> Due: { t.dueDate } </p>
          </div>
        </div>
        )
    });
    return (
      <div>
        <h2> My list of todos </h2>
        { todos }
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
        <Todos todos={this.state.todos}/>
      </div>
      )
  }
});

React.render(<App/>, document.getElementById('app'));
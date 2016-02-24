var TodosList = React.createClass({
  render: function() {
    var self = this;
    var todos = this.props.todos.map(function(t){
      return (
        <div className="panel panel-default" key={t._id}>
          <div className="panel-body">
            <h3> { t.name }  </h3>
            <p> { t.description } </p>
          </div>
          <div className="panel-footer">
            <p> Due: { t.dueDate } </p>
            <button type="button" className="btn btn-default" onClick={self.props.handleComplete.bind(this, t)}>complete</button>
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
  handleComplete: function(todo) {
    var id = todo._id;
    $.ajax({
      url: 'api/todos/' + id,
      method: 'DELETE'
    }).done(function(){
      console.log('deleteing todo')
      this.loadTodosFromServer();
    }.bind(this))
  },
  componentDidMount: function(){
    this.loadTodosFromServer();
  },
  render: function() {
    return (
      <div>
        <TodosList 
        todos={this.state.todos}
        handleComplete={this.handleComplete}
        />
      </div>
      )
  }
});

React.render(<App/>, document.getElementById('app'));
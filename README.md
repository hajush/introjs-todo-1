//MOCK OBJECT FOR TODO
{
  "name": "Learn React",
  "id": 1,
  "dueDate": "12/12/16",
  "description": "self explanatory..."
}

//MOCK API FOR TODO
{
  "GET /todos": {
    "desc": "returns all todos",
    "response": "200 application/json",
    "data": [{}, {}, {}]
  },

  "GET /todos/:id": {
    "desc": "returns one todo respresented by its id",
    "response": "200 application/json",
    "data": {}
  },

  "POST /todos": {
    "desc": "create and returns a new todo uisng the posted object as the lion",
    "response": "201 application/json",
    "data": {}
  },

  "PUT /todos/:id": {
    "desc": "updates and returns the matching todo with the posted update object",
    "response": "200 application/json",
    "data": {}
  },

  "DELETE /todos/:id": {
    "desc": "deletes and returns the matching todo",
    "response": "200 application/json",
    "data": {}
  }
}




1) Fire up a node server that responds with a success json

2) Make sure your todos database is connected in server.js

3) Build models/todo.js

4) POST route for /api/todos

5) GET route for /api/todos











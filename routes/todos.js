var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');

router.use(function(req, res, next) {
  console.log('something is happening!'); // eslint-disable-line no-console
  res.setHeader('Content-Type', 'application/json');
  next();
});

router.route('/todos')
  .post(function(req, res){

    var todo = new Todo();

    todo.name = req.body.name;
    todo.description = req.body.description;
    todo.done = req.body.done;

    todo.save(function(err, todo){
      if(err){
        res.send(err);
      } else {
        res.json(todo);
      }
    });
  })
  .get(function(req, res, next){
    Todo.find(function(err, todos){
      if(err){
        return next(err);
      } else {
        res.json(todos);
      }
    });
  });

router.route('/todos/:todo_id')
  .get(function(req, res, next){
    Todo.findById(req.params.todo_id, function(err, todo){
      if (err){
        next(err);
      } else {
        res.json(todo);
      }
    });
  })
  .put(function(req, res, next) {
    Todo.findById(req.params.todo_id, function(err, todo){
      if (err) {
        next(err);
      } else {
        todo.name = req.body.name || todo.name;
        todo.description = req.body.description || todo.description;
        todo.done = req.body.done || todo.done;

        todo.save(function(err){
          if (err) {
            next(err);
          } else {
            res.json({title: "todo updated"});
          }
        });
      }
    });
  })
  .delete(function(req, res, next) {
    Todo.remove({_id: req.params.todo_id}, function(err, todo){
      if (err){
        next(err);
      } else {
        res.json({title: 'todo was successfully deleted!'});
      }
    });
  });

module.exports = router;

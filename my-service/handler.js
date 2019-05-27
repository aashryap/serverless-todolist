'use strict';
const todoController = require("./todoController");
const errorHandler   = require("./errorHandler");



module.exports.addTodo = async (event) => {
  let body = JSON.parse(event.body);
  return await todoController.addTodo(body)
  .then((data) => {
      console.log("RESPONSE :", data);
      return errorHandler.handleSuccess(data, "Todo list added");
  })
  .catch(err => {
      return errorHandler.handleError(err);
  })  
}

module.exports.getTodos = async (event) => {
  let body = JSON.parse(event.body);
  return await todoController.getTodos(body)
  .then((data) => {
    console.log("RESPONSE : ", data);
    return errorHandler.handleSuccess(data, "All todo task")
  })
  .catch(err => {
    return errorHandler.handleError(err);
  })
}

module.exports.getTodoById = async (event) => {
  let body = JSON.parse(event.body);
  console.log("ID ", event.pathParameters);
  let id = event.pathParameters.id;
  return await todoController.getTodoById(id)
  .then(data => {
    return errorHandler.handleSuccess(data, "Todo list by id");
  })
  .catch(err => {
    return errorHandler.handleError(err);
  })
}

module.exports.updatetodo = async (event) => {
  let body = JSON.parse(event.body);
  return await todoController.updateTodo(body)
  .then(data => {
    return errorHandler.handleSuccess(data, "updated todo list");
  })
  .catch(err => {
    return errorHandler.handleError(err);
  })
}

module.exports.deletetodo = async (event) => {
  let id = event.pathParameters.id;
  return await todoController.deleteTodo(id)
  .then(data => {
    return errorHandler.handleSuccess(data, " Todo deleted successfully");
  })
  .catch(err => {
    return errorHandler.handleError(err);
  })
}









 
'use strict';

var angular = require('angular');
angular.module('todoListApp')
.controller('mainCtrl', function($scope, dataService){
  
  dataService.getTodos(function(response){
    var todos = response.data.todos;  
    $scope.todos =  todos;
    });
  
  $scope.addTodo = function() {
    var todo = {name: "This is a new todo.",
                      completed: false};
    $scope.todos.unshift(todo);
  };
})
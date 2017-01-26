'use strict';

var Todo = require('./models/todo.js');

var todos = [
	'hejhejhej',
	'walk the kids',
	'water the flowers'
];

todos.forEach(function(todo, index){
	Todo.find({'name':todo}, function(err, todos){
		if(!err && !todos.length){
			Todo.create({completed: false, name: todo});
		};
	});
});
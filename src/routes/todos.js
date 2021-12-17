const express = require('express')
const router = express.Router()
const Todo = require('../models/todos.models')



router.get('/', async (req, res, next) => {
 const todos = await Todo.find()
 res.json({data:todos})
});

router.post('/', async (req, res, next) => {
	const {content} = req.body
	const newTodo = new Todo({
		content:content
	})
	await newTodo.save()
  res.json({
		message:"Todo Saved",
		data:content
	})
});

router.get('/:id', async (req, res, next) => {
	const id = req.params.id
	console.log(id)
	const todo = await Todo.findById(id)

	res.json({
		data:todo
	})
});

router.delete('/:id', async (req, res, next) => {
	const id = req.params.id
	await Todo.findByIdAndDelete(id)

  res.json({
		message:"Deleted Todo"
	})
});

router.put('/:id', async(req, res) =>{
	const {id} = req.params
	const {content} = req.body
	console.log(content)
	const todo = await Todo.findOneAndUpdate({_id:id}, {content:content})
	res.json({
		todo
	})
})

module.exports = router;

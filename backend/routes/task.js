const express = require('express')
const { handleAddTask, handleGetAllTask, handleGetTaskById, handleUpdateTask, handleDeleteTask } = require('../controller/taskController')

const router = express.Router()

router.post('/', handleAddTask)
router.get('/', handleGetAllTask)
router.get('/:id', handleGetTaskById)
router.patch('/:id', handleUpdateTask)
router.delete('/:id', handleDeleteTask )

module.exports = router
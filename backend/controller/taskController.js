const TASK = require('../model/taskModel')

//ADD Task
const handleAddTask = async (req,res) => {
    const {title, task} = req.body


    //Validation
    let errors = {}
    if(!title) errors.title = "Title is required"

    if(!task) errors.task = "Task is required"

    if(Object.keys(errors).length !== 0) return res.status(400).json({error: errors})

    try{

        const todoTask = await TASK.create({
            title,
            task
        })
        if(!todoTask) return res.status(404).json({error: "Task not added"})
    
        return res.status(201).json({message: "Task is created"})
    }
    catch(e){
        console.log("Error adding task", e)
        return res.status(500).json({error: "Internal Server Error"})
    }
}

//Get All Task
const handleGetAllTask = async (req, res) => {
    try{
        const todotask = await TASK.find({})
        console.log(todotask)
        if(!todotask || todotask.length === 0) return res.status(404).json({error: "No task found"})

        return res.status(200).json({todotask})
    }
    catch(e){
        console.log("Error fetching all task", e)
        return res.status(500).json({error: "Internal Server Error"})
    }
}

//Get specific task
const handleGetTaskById = async (req, res) => {
    try{
        const id = req.params.id
        const todoTask = await TASK.findOne({_id: id})
        if(!todoTask) return res.status(404).json({error: "No task found"})

        return res.status(200).json({todoTask})
    }
    catch(e){
        console.log("Error fetching task by id", e)
        return res.status(500).json({message: "Internal Server Error"})
    }
}

//Update Task
const handleUpdateTask = async (req, res) => {
    const id = req.params.id
    const update = req.body
    try{
        const updatedTodoTask = await TASK.findOneAndUpdate(
            {_id: id},
            update,
            {new:true}
        )

        if(!updatedTodoTask) return res.status(404).json({error: "Task not found"})

        return res.status(200).json({message:"Task updated Successfully"})
    }
    catch(e){
        console.log("Error updating Task", e)
        return res.status(500).json({message:"Internal Server Error"})
    }
}

//Delete Task
const handleDeleteTask = async (req, res) => {
    const id = req.params.id
    try{
        const deleteTodo = await TASK.findOneAndDelete({_id: id})
        if(!deleteTodo) return res.status(404).json({error: "Task not found"})

        return res.status(200).json({message: "Task deleted Successfully"})
    }
    catch(e){
        console.log("Error Deleting Task", e)
        return res.status(500).json({message: "Internal Server Error"})
    }
}

module.exports = {
    handleAddTask,
    handleGetAllTask,
    handleGetTaskById,
    handleUpdateTask,
    handleDeleteTask
}
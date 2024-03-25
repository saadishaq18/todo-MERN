const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    task:{
        type: String,
        required: true
    }
})

const TASK = mongoose.model("tasks", taskSchema)

module.exports = TASK
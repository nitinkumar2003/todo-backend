const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const todoSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    }
})

const todoAddModal = mongoose.model('todoList', todoSchema);
exports.todoModal = todoAddModal

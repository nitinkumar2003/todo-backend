const mongoose = require('mongoose');
const model = require('../modal/todoModal')
const todoModel = model.todoModal;

const addTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newEntry = new todoModel({ title, description })
        console.log("newEntry", newEntry);
        const insertData = await newEntry.save();
        console.log("insertData", insertData)
        res.status(201).json({
            status: '201',
            message: "Data saved successflly.",
            data: insertData
        })
    } catch (err) {
        console.log("err", err)
        res.status(400).json({
            status: 400,
            message: "Something went wrong !"
        })
    }
}


const getTodo = async (req, res) => {
    try {

        const todolist = await todoModel.find({}, { _id: 1, title: 1, description: 1 });
        console.log("todolist", todolist)
        res.status(201).json({ message: 'Data Get successfully', data: todolist });


    } catch (err) {
        console.log("err", err)
        res.status(400).json({
            status: 400,
            message: "Something went wrong !"
        })
    }
}

const updateTodo = async (req, res) => {
    try {

        const { title, description, id } = req.body;
        const findTodo = await todoModel.findOne({ _id:id });
        if (!findTodo) return res.status(400).json({ status: 400, error: 'Provide correct details' });4

        const updatedData=await todoModel.updateOne({_id:id},{title,description})
        const updated = await todoModel.findOne({ _id:id },{title:1,_id:1,description:1});
    
        res.status(201).json({
            status: '201',
            message: "Data updated successflly.",
            data: updated
        })

    } catch (err) {
        res.status(400).json({
            status: 400,
            message: "Something went wrong !"
        })
    }
}

const deleteTodo = async (req, res) => {
    try {

        const { id } = req.body;
        const findTodo = await todoModel.findOne({ _id:id });
        if (!findTodo) return res.status(400).json({ status: 400, error: 'Provide correct details' });4

        const updatedData=await todoModel.deleteOne({_id:id})
    
        res.status(201).json({
            status: '201',
            message: "Data deleted successflly."
        })

    } catch (err) {
        res.status(400).json({
            status: 400,
            message: "Something went wrong !"
        })
    }
}

module.exports = {
    addTodo: addTodo,
    todoList: getTodo,
    updateTodo:updateTodo,
    deleteTodo:deleteTodo
}
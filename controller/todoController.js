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

module.exports={
    addTodo:addTodo
}
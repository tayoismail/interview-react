const mongoose = require('mongoose')

const Schema = mongoose.Schema

const teacherSchema = new Schema({
    staffNo: { type: String, required: true},
    teacherName: {type: String, required: true},    
    levels: {type: String, required: true},
    classHeld: {type: String, required: true}
}, {
    timestamps: true,
})

const Teacher = mongoose.model('Teacher', teacherSchema)

module.exports = Teacher
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const teacherSchema = new Schema({
    staffno: { type: String, required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    levels: {type: String, required: true},
    classheld: {type: String, required: true}
}, {
    timestamps: true,
})

const Teacher = mongoose.model('Teacher', teacherSchema)

module.exports = Teacher
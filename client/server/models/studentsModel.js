const mongoose = require('mongoose')

const Schema = mongoose.Schema

const studentSchema = new Schema({
    teacherName: {type: String, required: true, unique: true},
    studentNo : {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    class: {type: String, required: true}
}, {
    timestamps: true,
})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const studentSchema = new Schema({
    studentno : {type: String, required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    class: {type: String, required: true}
}, {
    timestamps: true,
})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student
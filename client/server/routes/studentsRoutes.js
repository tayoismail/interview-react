const express = require('express')
const router = express.Router()
const Student = require('../models/studentsModel')

router.route('/').get((req, res) => {
    Student.find()
         .then(students => res.json(students))
         .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const newStudent = new Student({
        teacherName: req.body.teacherName,
        studentNo: req.body.studentNo,
        firstName: req.body.firstName,
        lastName: req.body.lastName,        
        class: req.body.class,

    })

    newStudent.save()
        .then(() => res.json('!Student Added'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router